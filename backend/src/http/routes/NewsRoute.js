import express from "express";
import { convertMatchesToDatabaseInfo } from "../../database/Database.js";
import ScrappedNewsMatchesModel from "../../database/models/ScrappedNewsMatchesModel.js";
import ScrappedNewsModel from "../../database/models/ScrappedNewsModel.js";
const router = express.Router();

const DEFAULT_NEWS_QUANTITY = 30;

router.get("/last_news", async (req, res) => {
    const page = req.params.page || 0;

    const news = await ScrappedNewsModel.findAll({
        attributes: ["headline", "link", "id", "from", "createdAt"],
        include: [ScrappedNewsMatchesModel],
        limit: DEFAULT_NEWS_QUANTITY,
        offset: DEFAULT_NEWS_QUANTITY * page,
        order: [["createdAt", "DESC"]],
    });

    const formatedNews = [];

    for (const newObj of news) {
        const noticia = newObj.toJSON();
        if (noticia.ScrappedNewsMatchesModels != null) {
            const matchesConverted = await convertMatchesToDatabaseInfo(noticia.ScrappedNewsMatchesModels);
            noticia.matches = matchesConverted;
        }
        delete noticia.ScrappedNewsMatchesModels;
        formatedNews.push(noticia);
    }

    res.status(200).json(formatedNews);
});
export default router;
