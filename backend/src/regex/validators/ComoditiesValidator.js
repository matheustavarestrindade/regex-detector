import ComoditiesModel from "../../database/models/regex_models/ComoditiesModel.js";
import RegexValidator, { titleCase } from "../RegexValidator.js";

export default class ComoditiesValidator extends RegexValidator {
    constructor() {
        super();
        this.operations = [];
    }

    async load() {
        const comodities = await ComoditiesModel.findAll({});
        for (const comoditie of comodities) {
            const regexs = [];
            //regexs.push(new RegExp("\\b(" + Comodities.name + ")\\b", "ig"));
            //Make case insensitive and uppercase

            const regex = {
                regex: "\\b(" + comoditie.name + ")\\b",
                flags: "gi",
            };

            regexs.push(regex);

            this.operations.push({
                model: "ComoditiesModel",
                id: comoditie.id,
                patterns: regexs,
            });
        }
    }

    getPatterns() {
        return this.operations;
    }
}
