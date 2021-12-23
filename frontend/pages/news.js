import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import NewsCard from "../components/NewsPage/NewsCard";
import { BASE_URL } from "../config/URLConfig";

const NewsPage = ({ news }) => {
    const [loadingNews, setLoadingNews] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {

            


        }, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Layout>
            <div className="row mt-5">
                <div className="col-12 d-flex ">
                    <h1 className="w-100">Ultimas notícias</h1>
                    <span className="text-muted fs-6 mt-auto text-nowrap">atualizado: 1 Hora atrás </span>
                </div>
                <hr />
            </div>
            <div className="row mt-5">
                {news.map((newItem) => {
                    console.log(newItem);
                    return (
                        <div className="col-12 col-md-4 col-lg-3 border-0 mb-4 d-flex ">
                            <NewsCard headline={newItem.headline} link={newItem.link} detected_regexs={newItem.matches} />
                        </div>
                    );
                })}
            </div>
            <div className="d-flex align-items-center justify-content-center my-5">
                <button className="btn btn-lg btn-dark d-flex align-items-center">
                    {loadingNews && (
                        <>
                            <div className="spinner-border spinner-border-sm me-3" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            Carregando...
                        </>
                    )}
                    {!loadingNews && "Carregar mais notícias"}
                </button>
            </div>
        </Layout>
    );
};

NewsPage.getInitialProps = async () => {
    try {
        const data = await fetch(BASE_URL + "/news/last_news", {
            method: "GET",
        });
        const newsJson = await data.json();
        console.log(newsJson);
        return {
            news: newsJson,
        };
    } catch (err) {
        console.log(err);
    }
    return {
        news: [],
    };
};

export default NewsPage;
