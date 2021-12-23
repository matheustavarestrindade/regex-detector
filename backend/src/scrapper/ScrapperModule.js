import ParsesModel from "../database/models/ParsesModel.js";
import ScrappedNewsMatchesModel from "../database/models/ScrappedNewsMatchesModel.js";
import ScrappedNewsModel from "../database/models/ScrappedNewsModel.js";
import { fixText, replaceTextWithGeneric } from "../regex/RegexValidator.js";

export default class ScrapperModule {
    constructor(websiteUrl, checkPatterns, from) {
        this.url = websiteUrl;
        this.checkPatterns = checkPatterns;
        this.from = from;
    }

    async executeScrape() {}

    async formatPharsesWithMatchesAndSaveToDatabase(newObj) {
        //Frases
        const parses = newObj.body.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)(\s|[A-Z].*)/);
        for (const parse of parses) {
            let text = fixText(replaceTextWithGeneric(parse));

            if (!parse || parse.length < 50) {
                //Skip 50 chars text
                continue;
            }
            let isCryptoText = false;
            for (const checkPattern of this.checkPatterns) {
                const checkPatternModel = checkPattern.model;
                if (checkPatternModel.toLowerCase() === "cryptomodel") {
                    if (!isCryptoText) {
                        if (/(\\bcrypto\\b|\\baltcoin\\b|\\bcripto\\b|\\bcryptomoeda\\b|\\bcriptomoedas\\b|\\bcripto moeda\\b)/gi.exec(text)) {
                            //Post fala sobre crypto, pode testar os termos.
                            isCryptoText = true;
                        } else {
                            continue;
                        }
                    }
                }
                for (const pattern of checkPattern.patterns) {
                    const regex = new RegExp(pattern.regex, pattern.flags);
                    if (regex.exec(text)) {
                        text = text.replace(pattern, this.getPatternPlaceholder(checkPatternModel));
                    }
                }
            }

            text = text.toLowerCase();

            await ParsesModel.create({
                text: text,
                sentiment: null,
            });
        }
    }

    async saveToDatabase(formatedNewsList) {
        console.log("   ", ">".cyan, "Starting parses formating.".white);
        for (const formatedNews of formatedNewsList) {
            formatedNews.news.from = this.from;
            const newsInDatabse = await ScrappedNewsModel.create(formatedNews.news);
            const newsID = newsInDatabse.id;
            await this.formatPharsesWithMatchesAndSaveToDatabase(formatedNews.news);
            for (const match of formatedNews.matches) {
                await ScrappedNewsMatchesModel.create({
                    ScrappedNewsModelId: newsID,
                    type: match.type,
                    match_id: match.match_id,
                });
            }
        }
        console.log("   ", ">".cyan, "Finished parses formating.".white);
    }

    checkPattern(text) {
        text = fixText(text);
        const matches = [];
        let isCryptoText = false;
        for (const checkPattern of this.checkPatterns) {
            const checkPatternId = checkPattern.id;
            const checkPatternModel = checkPattern.model;
            if (checkPatternModel === "CryptoModel") {
                if (!isCryptoText) {
                    if (/(\\bcrypto\\b|\\baltcoin\\b|\\bcripto\\b|\\bcryptomoeda\\b|\\bcriptomoedas\\b|\\bcripto moeda\\b)/gi.exec(text)) {
                        //Post fala sobre crypto, pode testar os termos.
                        isCryptoText = true;
                    } else {
                        continue;
                    }
                }
            }
            for (const pattern of checkPattern.patterns) {
                const regex = new RegExp(pattern.regex, pattern.flags);
                if (regex.test(text)) {
                    matches.push({
                        match_id: checkPatternId,
                        type: checkPatternModel,
                    });
                    break;
                }
            }
        }
        return matches;
    }

    getPatternPlaceholder(modelType) {
        if (modelType.toString().toLowerCase() == "cryptomodel") {
            return "CRYPTO_COIN";
        } else if (modelType.toString().toLowerCase() == "empresasdabolsamodel") {
            return "STOCKMARKET_STOCK";
        } else if (modelType.toString().toLowerCase() == "vipmodel") {
            return "VIP_PERSON";
        } else if (modelType.toString().toLowerCase() == "currencymodel") {
            return "CURRENCY";
        } else if (modelType.toString().toLowerCase() == "partidomodel") {
            return "POLITICAL_GROUP";
        } else if (modelType.toString().toLowerCase() == "mineralsmodel") {
            return "MINERAL_ORE";
        } else if (modelType.toString().toLowerCase() == "comoditiesmodel") {
            return "COMODITIE";
        }
    }
}
