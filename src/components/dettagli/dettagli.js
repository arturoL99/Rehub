import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "./dettagli.scss";
import Context from "../../contextProvider";

export default function Dettagli(props) {
    const { language } = useContext(Context);
    return (
        <section className="dettagli_container">
            {
                language === "it" ?
                    <div className="dettagli">
                        <h1>Dettagli:</h1>
                        <p className="my-10">Indirizzo: <b>{props.proprieta.indirizzo}</b></p>
                        <p className="my-10">Superfice: <b>{props.proprieta.metriQuadri}</b></p>
                        <p className="my-10">Descrizione:{documentToReactComponents(props.proprieta.riassunto)}</p>
                        <p className="my-10">Sei interessato? <b><NavLink to="/contatti">Contattaci!</NavLink></b></p>
                    </div>
                    :
                    <div className="dettagli">
                        <h1>Details:</h1>
                        <p className="my-10">Address: <b>{props.proprieta.indirizzo}</b></p>
                        <p className="my-10">Surface: <b>{props.proprieta.metriQuadri}</b></p>
                        <p className="my-10">Description:{documentToReactComponents(props.proprieta.riassunto)}</p>
                        <p className="my-10">Are you interested? <b><NavLink to="/contatti">Contact Us!</NavLink></b></p>
                    </div>
            }
        </section>
    )
}