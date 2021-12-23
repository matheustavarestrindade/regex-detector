import { initUserModel } from "./models/UserModel.js";
import Sequelize from "sequelize";
import VIPModel, { initVIPModel, prefillVIPModel } from "./models/regex_models/VIPModel.js";
import CryptoModel, { initCryptoModel, prefillCryptoModel } from "./models/regex_models/CryptoModel.js";
import EmpresasDaBolsaModel, { initEmpresasDaBolsaModel, prefillEmpresasDaBolsa } from "./models/regex_models/EmpresasDaBolsaModel.js";
import ScrappedNewsMatchesModel, { initScrappedNewsMatchesModel } from "./models/ScrappedNewsMatchesModel.js";
import ScrappedNewsModel, { initScrappedNewsModel } from "./models/ScrappedNewsModel.js";
import CurrencyModel, { initCurrencyModel, prefillCurrencyModel } from "./models/regex_models/CurrencyModel.js";
import PartidoModel, { initPartidoModel, prefillPartidos } from "./models/regex_models/PartidoModel.js";
import MineralsModel, { initMineralsModel, prefillMineraisModel } from "./models/regex_models/MineralsModel.js";
import ComoditiesModel, { initComoditiesModel, prefillComodities } from "./models/regex_models/ComoditiesModel.js";
import { initFundamentalistIndicatorModel, preffilFundamentalistModel } from "./models/regex_models/FundamentalistIndicatorModel.js";
import { initParsesModel } from "./models/ParsesModel.js";

export default class Database {
    constructor() {
        this.connection = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            dialect: "mysql",
            logging: false,
        });
    }

    async initDatabase() {
        if (!(await this.checkConnection())) {
            return false;
        }
        await initUserModel(this.connection);
        await initVIPModel(this.connection);
        await initCryptoModel(this.connection);
        await initEmpresasDaBolsaModel(this.connection);
        await initCurrencyModel(this.connection);
        await initScrappedNewsMatchesModel(this.connection);
        await initScrappedNewsModel(this.connection);
        await initPartidoModel(this.connection);
        await initMineralsModel(this.connection);
        await initComoditiesModel(this.connection);
        await initFundamentalistIndicatorModel(this.connection);
        await initParsesModel(this.connection);
        ScrappedNewsModel.hasMany(ScrappedNewsMatchesModel);

        await ScrappedNewsModel.sync();
        await ScrappedNewsMatchesModel.sync();

        await preffilFundamentalistModel();
        await prefillCurrencyModel();
        await prefillEmpresasDaBolsa();
        await prefillVIPModel();
        await prefillCryptoModel();
        await prefillPartidos();
        await prefillMineraisModel();
        await prefillComodities();

        return true;
    }

    async checkConnection() {
        try {
            await this.connection.authenticate();
            console.log("Connection has been established successfully.");
            return true;
        } catch (error) {
            console.error("Unable to connect to the database:", error);
        }
        return false;
    }
}

export const convertMatchesToDatabaseInfo = async (matchesList) => {
    let newMatches = [];
    for (const match of matchesList) {
        if (match.type.toString().toLowerCase() == "cryptomodel") {
            const val = await CryptoModel.findOne({ where: { id: Number(match.match_id) }, attributes: ["name", "symbol", "id"] });
            newMatches.push(val.toJSON());
        } else if (match.type.toString().toLowerCase() == "empresasdabolsamodel") {
            const val = await EmpresasDaBolsaModel.findOne({ where: { id: Number(match.match_id) }, attributes: ["name", "symbols", "id"] });
            newMatches.push(val.toJSON());
        } else if (match.type.toString().toLowerCase() == "vipmodel") {
            const val = await VIPModel.findOne({ where: { id: Number(match.match_id) }, attributes: ["name", "id"] });
            newMatches.push(val.toJSON());
        } else if (match.type.toString().toLowerCase() == "currencymodel") {
            const val = await CurrencyModel.findOne({ where: { id: Number(match.match_id) }, attributes: ["name", "symbol", "id"] });
            newMatches.push(val.toJSON());
        } else if (match.type.toString().toLowerCase() == "partidomodel") {
            const val = await PartidoModel.findOne({ where: { id: Number(match.match_id) }, attributes: ["name", "symbol", "id"] });
            newMatches.push(val.toJSON());
        } else if (match.type.toString().toLowerCase() == "mineralsmodel") {
            const val = await MineralsModel.findOne({ where: { id: Number(match.match_id) }, attributes: ["name", "id"] });
            newMatches.push(val.toJSON());
        } else if (match.type.toString().toLowerCase() == "comoditiesmodel") {
            const val = await ComoditiesModel.findOne({ where: { id: Number(match.match_id) }, attributes: ["name", "type", "id"] });
            newMatches.push(val.toJSON());
        }
    }
    return newMatches;
};
