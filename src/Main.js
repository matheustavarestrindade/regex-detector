import { config } from "dotenv";
config();
import express from "express";
import http from "http";
import { Server } from "socket.io";
import SocketHandler from "./socket/SocketHandler.js";
import HttpHandler from "./http/HttpHandler.js";
import Database from "./database/Database.js";
import CryptoValidator from "./regex/validators/CryptoValidator.js";
import EmpresasDaBolsaValidator from "./regex/validators/EmpresasDaBolsaValidator.js";
import VIPValidator from "./regex/validators/VIPValidator.js";
import InfoMoneyModule from "./scrapper/modules/InfoMoneyModule.js";
import CurrencyValidator from "./regex/validators/CurrencyValidator.js";

class Main {
    constructor() {
        this.app = express();
        this.httpServer = http.createServer(this.app);
        this.io = new Server(this.httpServer);
        this.socketHandler = null;
        this.httpHandler = null;
        this.database = new Database();

        this.patterns = [];

        this.initApplication();
    }

    async initApplication() {
        if (!(await this.database.initDatabase())) {
            console.log("Database cannot be initialized, stoping application!");
            return;
        }

        this.httpServer.listen(process.env.SERVER_PORT, () => console.log(`Server listening on port: ${process.env.SERVER_PORT}`));
        this.app.use(express.json());
        this.socketHandler = new SocketHandler(this.io);
        this.httpHandler = new HttpHandler(this.app);

        const cryptoValidator = new CryptoValidator();
        const empresasDaBolsaValidator = new EmpresasDaBolsaValidator();
        const vipValidator = new VIPValidator();
        const currencyValidator = new CurrencyValidator();

        await currencyValidator.load();
        await cryptoValidator.load();
        await empresasDaBolsaValidator.load();
        await vipValidator.load();

        this.patterns.push(...cryptoValidator.getPatterns());
        this.patterns.push(...empresasDaBolsaValidator.getPatterns());
        this.patterns.push(...vipValidator.getPatterns());
        this.patterns.push(...currencyValidator.getPatterns());

        const testInfoMoney = new InfoMoneyModule(this.patterns);
        await testInfoMoney.executeScrape();
    }
}

global.instance = new Main();
