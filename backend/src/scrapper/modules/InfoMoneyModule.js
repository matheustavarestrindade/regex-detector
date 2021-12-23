import ScrapperModule from "../ScrapperModule.js";
import { JSDOM } from "jsdom";
import fetch from "node-fetch";
import ScrappedNewsModel from "../../database/models/ScrappedNewsModel.js";
import color from "colors";
color.enable();
export default class InfoMoneyModule extends ScrapperModule {
    constructor(patterns) {
        super("https://www.infomoney.com.br/ultimas-noticias/", patterns, "InfoMoney");
    }

    async executeScrape() {
        console.log("[INFO]".cyan, "Starting scrapping of website:".white, "InfoMoney".yellow);
        const data = await fetch(this.url.toString());
        const html = await data.text();
        const dom = new JSDOM(html);
        const newsDivs = dom.window.document.querySelector("#infiniteScroll");
        const newsList = [...newsDivs.querySelectorAll(".item")];

        const formatedNewsList = [];
        let page = 1;

        for (const news of newsList) {
            console.log("   ", ">".cyan, "Scrapping page:".white, `${page}`.yellow);
            page++;
            const headline = news.querySelector(".hl-title.hl-title-2 a").getAttribute("title");
            const href = news.querySelector(".hl-title.hl-title-2 a").href;

            const isInDatabase = await ScrappedNewsModel.findOne({ where: { link: href } });

            if (isInDatabase) {
                console.log("   ", ">".cyan, "Page skipped.".red);
                continue;
            }
            try {
                const fullNewsPage = await fetch(href);
                const fullNewsPageHtml = await fullNewsPage.text();
                const newsPageDom = new JSDOM(fullNewsPageHtml);
                const childs = [...newsPageDom.window.document.querySelector(".article-content").children];
                const pList = childs.filter((child, index) => child.nodeName === "P" && child.textContent != "").map((p) => p.textContent);
                //Remove last paragraph as it is an AD
                pList.pop();
                const matches = this.checkPattern(pList.join(" "));
                const headLineMatches = this.checkPattern(headline);
                for (const headlineMatch of headLineMatches) {
                    matches.push(headlineMatch);
                }

                formatedNewsList.push({ news: { headline, link: href, body: pList.join(" \n") }, matches });
                console.log("   ", ">".cyan, "Page scrapped successfully.".green);
            } catch (err) {
                console.log("   ", ">".cyan, "Scrapping failed.".red);
            }
        }

        await this.saveToDatabase(formatedNewsList);
    }
}
