import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import InfoMoney from "../../public/images/infomoney.png";
import Band from "../../public/images/band.png";
import BBC from "../../public/images/bbc.png";
import Bloomberg from "../../public/images/bloomberg.png";
import G1 from "../../public/images/g1.png";
import SunoResearch from "../../public/images/suno.png";
import UOL from "../../public/images/uol.png";
import Veja from "../../public/images/veja.png";

import Styles from "./NewsCardStyles.module.scss";
const NewsCard = ({ from, headline, detected_regexs, link }) => {
    const [play, setPlay] = useState(false);
    const [oppened, setOpened] = useState(false);
    return (
        <a
            className="card border-0 shadow-md text-decoration-none d-flex glass align-items-center overflow-hidden"
            onMouseEnter={() => {
                setPlay(true);
                setOpened(true);
            }}
            onMouseLeave={() => setPlay(false)}
            href={link}
        >
            {!oppened && <div className={Styles.news_alert}>Nova</div>}
            <div className={Styles.news_card_container}>
                <Image src={getImageUrl(from)} />
            </div>
            <div className="card-body d-flex row">
                <h6 className="card-title">{headline}</h6>
                <span className="d-flex justify-content-end mt-auto">
                    <span className="text-muted">12 Hours ago</span>
                </span>
            </div>
            <div className={Styles.marquee_container}>
                <Marquee gradient={false} play={play} speed={60} pauseOnHover={true}>
                    {detected_regexs.map((reg) => {
                        return <p className={Styles.marquee_item}>{reg.name}</p>;
                    })}
                </Marquee>
            </div>
        </a>
    );
};

const getImageUrl = (from) => {
    switch (from) {
        case "InfoMoney":
            return InfoMoney;
        case "Band":
            return Band;
        case "BBC":
            return BBC;
        case "Bloomberg":
            return Bloomberg;
        case "G1":
            return G1;
        case "SunoResearch":
            return SunoResearch;
        case "UOL":
            return UOL;
        case "Veja":
            return Veja;
        default:
            return InfoMoney;
    }
};

export default NewsCard;
