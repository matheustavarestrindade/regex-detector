import MineralsModel from "../../database/models/regex_models/MineralsModel.js";
import RegexValidator, { fixText } from "../RegexValidator.js";

export default class MineralsValidator extends RegexValidator {
    constructor() {
        super();
        this.operations = [];
    }

    async load() {
        const minerals = await MineralsModel.findAll({});
        for (const mineral of minerals) {
            const regexs = [];
            const fixedName = fixText(mineral.name);

            const regex = {
                regex: "\\b(" + fixedName + ")\\b",
                flags: "ig",
            };

            regexs.push(regex);

            this.operations.push({
                model: "MineralsModel",
                id: mineral.id,
                patterns: regexs,
            });
        }
    }

    getPatterns() {
        return this.operations;
    }
}
