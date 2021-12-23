import EmpresasDaBolsaModel from "../../database/models/regex_models/EmpresasDaBolsaModel.js";
import RegexValidator, { fixText, titleCase } from "../RegexValidator.js";

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
            //const fixedName = titleCase(fixText(empresa.name));

            //const regex = {
            //    regex: "\\b(" + fixedName + ")\\b",
            //    flags: "g",
            //};
            //
            //regexs.push(regex);

            for (const symbol of symbols) {
                if (symbol == "" || symbol == null) {
                    continue;
                }

                const regexEmpresa = {
                    regex: "\\b(" + symbol.toUpperCase() + ")\\b",
                    flags: "g",
                };

                //Make symbol upercase and case sensitive
                regexs.push(regexEmpresa);
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
