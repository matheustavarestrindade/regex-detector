import { fixText } from "../regex/RegexValidator.js";

export default class ScrapperModule {
    constructor(websiteUrl, checkPatterns) {
        this.url = websiteUrl;
        this.checkPatterns = checkPatterns;
    }

    async executeScrape() {}

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
                if (pattern.exec(text)) {
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
}
