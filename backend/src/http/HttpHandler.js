import NewsRouter from "./routes/NewsRoute.js";

export default class HttpHandler {
    constructor(expressApp) {
        this.app = expressApp;
        this.registerRoutes();
    }

    registerRoutes() {
        this.app.use("/news", NewsRouter);
    }
}
