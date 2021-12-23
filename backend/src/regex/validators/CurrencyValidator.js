import CurrencyModel from "../../database/models/regex_models/CurrencyModel.js";
import RegexValidator, { fixText } from "../RegexValidator.js";

export default class CurrencyValidator extends RegexValidator {
    constructor() {
        super();
        this.operations = [];
    }

    async load() {
        const currencies = await CurrencyModel.findAll({});
        for (const currency of currencies) {
            const regexs = [];
            const fixedName = fixText(currency.name);
            const regex = {
                regex: "\\b(" + currency.symbol.toUpperCase() + ")\\b",
                flags: "g",
            };

            const regex2 = {
                regex: "\\b(" + fixedName + ")\\b",
                flags: "ig",
            };

            regexs.push(regex);
            regexs.push(regex2);

            this.operations.push({
                model: "CurrencyModel",
                id: currency.id,
                patterns: regexs,
            });
        }
    }

    getPatterns() {
        return this.operations;
    }
}
