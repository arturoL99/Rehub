import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./dettagli.scss";

export default function Dettagli(props) {
    console.log(props);
    return (
        <section className="dettagli_container">
            <div className="dettagli">
                <h1>Dettagli:</h1>
                {/* <h3>{props.proprieta.nome}</h3> */}
                <p className="my-10">Indirizzo: <b>{props.proprieta.indirizzo}</b></p>
                <p className="my-10">Superfice: <b>{props.proprieta.metriQuadri}</b></p>
                <p className="my-10">Descrizione: <br/><br/> {props.proprieta.descrizione}</p>
                <p className="my-10">Sei interessato? <b><NavLink to="/contatti">Contattaci!</NavLink></b></p>
            </div>
        </section>
    )
}