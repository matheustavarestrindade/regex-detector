import CurrencyModel from "../../database/models/CurrencyModel.js";
import RegexValidator from "../RegexValidator.js";

export default class CurrencyValidator extends RegexValidator {
    constructor() {
        super();
        this.operations = [];
    }

    async load() {
        const currencies = await CurrencyModel.findAll({});
        for (const currency of currencies) {
            const regexs = [];
            regexs.push(new RegExp("\\b(" + currency.name + ")\\b", "ig"));
            //Make case insensitive and uppercase
            regexs.push(new RegExp("\\b(" + currency.symbol.toUpperCase() + ")\\b", "g"));
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
