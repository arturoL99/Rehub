import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bgImg, bgImgMobile } from "../../utils/ImageUtils";
import './homeStyle.scss';

export default function Hero() {
    const [counter, setCounter] = useState(0);
    const [imgArray, setImgArray] = useState([]);
    const [foto, setFoto] = useState();

    const avanti = () => {
        setCounter(counter + 1);
        if (counter === imgArray.length - 1) {
            setCounter(0);
        }
        setFoto(imgArray[counter]);
    };

    const handleResize = () => {
        if (window.innerWidth > 500) {
            setImgArray(bgImg);
            setFoto(bgImg[counter]);
        } else {
            setImgArray(bgImgMobile);
            setFoto(bgImgMobile[counter]);
        }
    };

    useEffect(() => {
        const interval = setInterval(avanti, 5000);
        return () => clearInterval(interval);
    });

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const imgStyles = {
        backgroundImage: `url(${foto})`
    };
    return (
        <section className="hero">
            <div style={imgStyles} className="hero_slide"></div>
            {/* <img src={foto} className="heroBg" alt="background" /> */}
            <div className="hero_text">
                <h2 className="text-shadow">Tutti i servizi immobiliari dedicati a:</h2>
                <div className="btns">
                    <Link to={"/servizi/utilizzatori"} className="hero_btn">Utilizzatori</Link>
                    <Link to={"/servizi/proprietari"} className="hero_btn">Proprietari</Link>
                    <Link to={"/servizi/investitori"} className="hero_btn">Investitori</Link>
                </div>
            </div>
        </section>
    )
}