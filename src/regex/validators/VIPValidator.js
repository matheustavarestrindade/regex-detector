import VIPModel from "../../database/models/VIPModel.js";
import RegexValidator from "../RegexValidator.js";

export default class VIPValidator extends RegexValidator {
    constructor() {
        super();
        this.operations = [];
    }

    async load() {
        const vips = await VIPModel.findAll({});
        for (const vip of vips) {
            const regexs = [];
            regexs.push(new RegExp("\\b(" + vip.name + ")\\b", "ig"));
            regexs.push(new RegExp("\\b(" + vip.twitter + ")\\b", "ig"));
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
