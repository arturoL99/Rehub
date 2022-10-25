import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./dettagli.scss";

export default function Dettagli(props) {
    console.log(props);
    return (
        <section className="dettagli_container">
            <div className="dettagli">
                <h1>Dettagli:</h1>
                <h3>{props.proprieta.nome}</h3>
                <p>Indirizzo: <b>{props.proprieta.indirizzo}</b></p>
                <p>Superfice: <b>{props.proprieta.metriQuadri}</b></p>
                <p>Descrizione: <br/><br/> {props.proprieta.descrizione}</p>
                <p>Sei interessato? <b><NavLink to="/contatti">Contattaci!</NavLink></b></p>
            </div>
        </section>
    )
}