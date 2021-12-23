import FundamentalistIndicatorModel from "../../database/models/regex_models/FundamentalistIndicatorModel.js";
import RegexValidator from "../RegexValidator.js";

export default class FundamentusValidator extends RegexValidator {
    constructor() {
        super();
        this.operations = [];
    }

    async load() {
        const fundamentus = await FundamentalistIndicatorModel.findAll({});
        for (const fundamento of fundamentus) {
            const regexs = [];
            //regexs.push(new RegExp("\\b(" + Fundamentus.name + ")\\b", "ig"));
            //Make case insensitive and uppercase
            const regex = {
                regex: "\\b(" + fundamento.symbol.toUpperCase() + ")\\b",
                flags: "g",
            };

            regexs.push(regex);

            this.operations.push({
                model: "FundamentalistIndicatorModel",
                id: fundamento.id,
                patterns: regexs,
            });
        }
    }

    getPatterns() {
        return this.operations;
    }
}
