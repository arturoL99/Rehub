import React from "react";
import { NavLink } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "./dettagli.scss";

export default function Dettagli(props) {
    return (
        <section className="dettagli_container">
            <div className="dettagli">
                <h1>Dettagli:</h1>
                <p className="my-10">Indirizzo: <b>{props.proprieta.indirizzo}</b></p>
                <p className="my-10">Superfice: <b>{props.proprieta.metriQuadri}</b></p>
                <p className="my-10">Descrizione:{documentToReactComponents(props.proprieta.riassunto)}</p>
                <p className="my-10">Sei interessato? <b><NavLink to="/contatti">Contattaci!</NavLink></b></p>
            </div>
        </section>
    )
}