import Sequelize from "sequelize";
const { Op } = Sequelize;
import EmpresasDaBolsaModel from "../../database/models/EmpresasDaBolsaModel.js";
import RegexValidator from "../RegexValidator.js";

export default class EmpresasDaBolsaValidator extends RegexValidator {
    constructor() {
        super();
        this.operations = [];
    }

    async load() {
        const empresas = await EmpresasDaBolsaModel.findAll({});
        for (const empresa of empresas) {
            const symbols = empresa.symbols.split(",");
            const regexs = [];
            regexs.push(new RegExp("\\b(" + empresa.name + ")\\b", "ig"));

            for (const symbol of symbols) {
                if (symbol == "" || symbol == null) {
                    continue;
                }
                //Make symbol upercase and case sensitive
                regexs.push(new RegExp("\\b(" + symbol.toUpperCase() + ")\\b", "g"));
            }
            this.operations.push({
                model: "EmpresasDaBolsaModel",
                id: empresa.id,
                patterns: regexs,
            });
        }
    }

    getPatterns() {
        return this.operations;
    }
}
