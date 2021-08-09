import { initUserModel } from "./models/UserModel.js";
import Sequelize from "sequelize";
import { initVIPModel, prefillVIPModel } from "./models/VIPModel.js";
import { initCryptoModel, prefillCryptoModel } from "./models/CryptoModel.js";
import { initEmpresasDaBolsaModel, prefillEmpresasDaBolsa } from "./models/EmpresasDaBolsaModel.js";
import ScrappedNewsMatchesModel, { initScrappedNewsMatchesModel } from "./models/ScrappedNewsMatchesModel.js";
import ScrappedNewsModel, { initScrappedNewsModel } from "./models/ScrappedNewsModel.js";
import { initCurrencyModel, prefillCurrencyModel } from "./models/CurrencyModel.js";

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

        ScrappedNewsModel.hasMany(ScrappedNewsMatchesModel);

        await ScrappedNewsModel.sync();
        await ScrappedNewsMatchesModel.sync();

        await prefillCurrencyModel();
        await prefillEmpresasDaBolsa();
        await prefillVIPModel();
        await prefillCryptoModel();

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
