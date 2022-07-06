import React from "react";
import { Link } from "react-router-dom";
import Style from './homeStyle.scss';

export default function Hero() {


    const bg_img = ["bg_img1", "bg_img2", "bg_img3"]
    var i = 0;

    setInterval(avanti, 10000);

    function avanti() {
        if (i === bg_img.length) {
            i = 0;
            document.getElementById("hero").classList.replace(bg_img[2], bg_img[i]);
        } if (i === bg_img.length - 1) {
            document.getElementById("hero").classList.replace(bg_img[i], bg_img[0]);
        }
        document.getElementById("hero").classList.replace(bg_img[i], bg_img[i + 1]);
        i++;

    }

    return (
        <section id="hero" className="bg_img1">
            <div className="hero_text">
                <h2 className="text-shadow">Tutti i servizi Real Estate dedicati a:</h2>
                <div className="btns">
                    <Link to={"/servizi/utilizzatori"} className="hero_btn">Utilizzatori</Link>
                    <Link to={"/servizi/proprietari"} className="hero_btn">Proprietari</Link>
                    <Link to={"/servizi/investitori"} className="hero_btn">Investirori</Link>
                </div>
            </div>
        </section>
    )
}