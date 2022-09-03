import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './homeStyle.scss';

export default function Hero() {

    const [classe, setClasse] = useState("bg_img1");
    const [counter, setCounter] = useState(0);
    const bg_img = ["bg_img1", "bg_img2", "bg_img3"]

    function avanti() {
        setCounter(counter + 1);
        if (counter === bg_img.length -1) {
            setCounter(0);
        } 
        setClasse(bg_img[counter]);
    };
    
    const interval = setInterval(avanti, 10000);

    return (
        <section id="hero" className={classe}>
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