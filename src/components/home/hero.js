import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bgImg } from "../../utils/ImageUtils";
import './homeStyle.scss';

export default function Hero() {

    const [counter, setCounter] = useState(0);
    const [classe, setClasse] = useState(bgImg[counter]);

    function avanti() {
        setCounter(counter + 1);
        if (counter === bgImg.length - 1) {
            setCounter(0);
        }
        setClasse(bgImg[counter]);
        console.log(counter);
        console.log(classe);
    };

    useEffect(() => {
        const interval = setInterval(avanti, 10000);

        return () => clearInterval(interval);
    })

    return (
        <section id="hero">
            <img src={classe} className="heroBg" alt="background" />
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