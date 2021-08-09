import ScrapperModule from "../ScrapperModule.js";
import { JSDOM } from "jsdom";
import fetch from "node-fetch";
import CryptoModel from "../../database/models/CryptoModel.js";
import EmpresasDaBolsaModel from "../../database/models/EmpresasDaBolsaModel.js";
import VIPModel from "../../database/models/VIPModel.js";
import CurrencyModel from "../../database/models/CurrencyModel.js";

export default class InfoMoneyModule extends ScrapperModule {
    constructor(patterns) {
        super("https://www.infomoney.com.br/ultimas-noticias/", patterns);
    }

    async executeScrape() {
        const data = await fetch(this.url.toString());
        const html = await data.text();
        const dom = new JSDOM(html);
        const newsDivs = dom.window.document.querySelector("#infiniteScroll");
        const newsList = [...newsDivs.querySelectorAll(".item")];

        const formatedNewsList = [];

        for (const news of newsList) {
            const headline = news.querySelector(".hl-title.hl-title-2 a").getAttribute("title");
            const href = news.querySelector(".hl-title.hl-title-2 a").href;

            const fullNewsPage = await fetch(href);
            const fullNewsPageHtml = await fullNewsPage.text();
            const newsPageDom = new JSDOM(fullNewsPageHtml);
            const childs = [...newsPageDom.window.document.querySelector(".article-content").children];
            const pList = childs.filter((child, index) => child.nodeName === "P").map((p) => p.textContent);
            //Remove last paragraph as it is an AD
            pList.pop();

            const matches = this.checkPattern(pList.join(" "));
            formatedNewsList.push({ headline, href, full_news: pList, matches });
        }

        for (const formatedNews of formatedNewsList) {
            let newMatches = [];
            for (const match of formatedNews.matches) {
                if (match.type.toString().toLowerCase() == "cryptomodel") {
                    const val = await CryptoModel.findOne({ where: { id: Number(match.match_id) } });
                    newMatches.push(val.toJSON());
                } else if (match.type.toString().toLowerCase() == "empresasdabolsamodel") {
                    const val = await EmpresasDaBolsaModel.findOne({ where: { id: Number(match.match_id) } });
                    newMatches.push(val.toJSON());
                } else if (match.type.toString().toLowerCase() == "vipmodel") {
                    const val = await VIPModel.findOne({ where: { id: Number(match.match_id) } });
                    newMatches.push(val.toJSON());
                } else if (match.type.toString().toLowerCase() == "currencymodel") {
                    const val = await CurrencyModel.findOne({ where: { id: Number(match.match_id) } });
                    newMatches.push(val.toJSON());
                }
            }
            formatedNews.matches = newMatches;
        }

        console.log(JSON.stringify(formatedNewsList));
    }
}
