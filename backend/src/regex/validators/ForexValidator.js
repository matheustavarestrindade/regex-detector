import CurrencyModel from "../../database/models/regex_models/CurrencyModel.js";
import RegexValidator, { fixText } from "../RegexValidator.js";

export default class ForexValidator extends RegexValidator {
    constructor() {
        super();
        this.operations = [];
    }

    async load() {
        const currencies = await CurrencyModel.findAll({});
        for (const currency of currencies) {
            for (const pair of currencies) {
                if (pair.symbol == currency.symbol) continue;
                const regexs = [];
                //Make case insensitive and uppercase

                const regex = {
                    regex: `\\b(${currency.symbol}[\\\/]?${pair.symbol})\\b`,
                    flags: "gi",
                };

                regexs.push(regex);

                this.operations.push({
                    model: "CurrencyModel",
                    id: currency.id,
                    patterns: regexs,
                });
                this.operations.push({
                    model: "CurrencyModel",
                    id: pair.id,
                    patterns: regexs,
                });
            }
        }
    }

    getPatterns() {
        return this.operations;
    }
}
