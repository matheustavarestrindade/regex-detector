import CryptoModel from "../../database/models/CryptoModel.js";
import RegexValidator from "../RegexValidator.js";

export default class CryptoValidator extends RegexValidator {
    constructor() {
        super();
        this.operations = [];
    }

    async load() {
        const cryptos = await CryptoModel.findAll({});
        for (const crypto of cryptos) {
            const regexs = [];
            regexs.push(new RegExp("\\b(" + crypto.name + ")\\b", "ig"));
            //Make case insensitive and uppercase
            regexs.push(new RegExp("\\b(" + crypto.symbol.toUpperCase() + ")\\b", "g"));
            this.operations.push({
                model: "CryptoModel",
                id: crypto.id,
                patterns: regexs,
            });
        }
    }

    getPatterns() {
        return this.operations;
    }
}
