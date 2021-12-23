import PartidoModel from "../../database/models/regex_models/PartidoModel.js";
import RegexValidator, { fixText, titleCase } from "../RegexValidator.js";

export default class PartidoValidator extends RegexValidator {
    constructor() {
        super();
        this.operations = [];
    }

    async load() {
        const partidos = await PartidoModel.findAll({});
        for (const partido of partidos) {
            const symbol = partido.symbol;
            const regexs = [];

            const fixedName = titleCase(fixText(partido.name));
            const regex = {
                regex: "\\b(" + fixedName + ")\\b",
                flags: "g",
            };
            const regex2 = {
                regex: "\\b(" + symbol.toUpperCase() + ")\\b",
                flags: "g",
            };

            regexs.push(regex);
            regexs.push(regex2);

            this.operations.push({
                model: "PartidoModel",
                id: partido.id,
                patterns: regexs,
            });
        }
    }

    getPatterns() {
        return this.operations;
    }
}
