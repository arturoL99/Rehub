import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../contextProvider";
import './homeStyle.scss';

export default function Hero() {
    const { language } = useContext(Context);
    return (
        <section className="hero">
            <div className="heroBg"></div>
            {
                language === "it" ?
                    <div className="hero_text">
                        <h2 className="text-shadow">Tutti i servizi immobiliari dedicati a:</h2>
                        <div className="btns">
                            <Link to={"/servizi/utilizzatori"} className="hero_btn">Utilizzatori</Link>
                            <Link to={"/servizi/proprietari"} className="hero_btn">Proprietari</Link>
                            <Link to={"/servizi/investitori"} className="hero_btn">Investitori</Link>
                        </div>
                    </div> :
                    <div className="hero_text">
                        <h2 className="text-shadow">All real estate services for:</h2>
                        <div className="btns">
                            <Link to={"/servizi/utilizzatori"} className="hero_btn">Users</Link>
                            <Link to={"/servizi/proprietari"} className="hero_btn">Owners</Link>
                            <Link to={"/servizi/investitori"} className="hero_btn">Investors</Link>
                        </div>
                    </div>
            }
        </section>
    )
}