import VIPModel from "../../database/models/regex_models/VIPModel.js";
import RegexValidator, { fixText } from "../RegexValidator.js";

export default class VIPValidator extends RegexValidator {
    constructor() {
        super();
        this.operations = [];
    }

    async load() {
        const vips = await VIPModel.findAll({});
        for (const vip of vips) {
            const regexs = [];

            const fixedName = fixText(vip.name);

            const regex = {
                regex: "\\b(" + fixedName + ")\\b",
                flags: "ig",
            };
            const regex2 = {
                regex: "\\b(" + vip.twitter + ")\\b",
                flags: "ig",
            };

            regexs.push(regex);
            regexs.push(regex2);

            this.operations.push({
                model: "VIPModel",
                id: vip.id,
                patterns: regexs,
            });
        }
    }

    getPatterns() {
        return this.operations;
    }
}
