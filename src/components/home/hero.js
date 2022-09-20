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
        if (counter === bgImg.length - 1) {
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

    return (
        <section id="hero">
            <img src={foto} className="heroBg" alt="background" />
            <div className="hero_text">
                <h2 className="text-shadow">Tutti i servizi immobiliari dedicati a:</h2>
                <div className="btns">
                    <Link to={"/servizi/utilizzatori"} className="hero_btn">Utilizzatori</Link>
                    <Link to={"/servizi/proprietari"} className="hero_btn">Proprietari</Link>
                    <Link to={"/servizi/investitori"} className="hero_btn">Investirori</Link>
                </div>
            </div>
        </section>
    )
}