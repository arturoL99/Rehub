import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import "./dettagli.scss";
import Context from "../../contextProvider";
import Loading from "../loading/loading.js";
import pdf from "../../images/icons8-pdf-60.png";
import linkedin from "../../images/icons8-linkedin.svg";

export default function Dettagli(props) {
    const { language } = useContext(Context);
    if (!props.proprieta) return <Loading />
    return (
        <section className="dettagli_container">
            {
                language === "it" ?
                    <div className="dettagli">
                        <h1>Dettagli:</h1>
                        <p className="my-10">Indirizzo: <b>{props.proprieta.indirizzo}</b></p>
                        <p className="my-10">Superfice: <b>{props.proprieta.metriQuadri}</b></p>
                        <p className="my-10">Descrizione:{documentToReactComponents(props.proprieta.riassunto)}</p>
                        <p className="my-10 dettagli_cta">
                            Sei interessato?
                            <span className="dettagli_link">
                                <b><NavLink to="/contatti">Contattaci!</NavLink></b>
                                {
                                    props.proprieta.inEvidenza && props.proprieta.pdf ?
                                        <b className="pdf_link"> |<a href={"https:" + props.proprieta.pdf.fields.file.url} target="/" className="pdf_link">
                                            Scarica <img src={pdf} alt="pdf" className="icon" />
                                        </a> |
                                            <a href="https://it.linkedin.com/company/re-hubsrl" target="blank" className="flex">
                                                <img src={linkedin} alt="linkedin" className="footerLogo" />
                                            </a>
                                        </b>
                                        : <></>}
                            </span>
                        </p>
                    </div>
                    :
                    <div className="dettagli">
                        <h1>Details:</h1>
                        <p className="my-10">Address: <b>{props.proprieta.indirizzo}</b></p>
                        <p className="my-10">Surface: <b>{props.proprieta.metriQuadri}</b></p>
                        <p className="my-10">Description:{documentToReactComponents(props.proprieta.riassunto)}</p>
                        <p className="my-10">
                            Are you interested? <b><NavLink to="/contatti">Contact Us!</NavLink></b>|
                            {props.proprieta.pdf.fields.file.url ? <b><a href={"https:" + props.proprieta.pdf.fields.file.url} target="/" className="">View more</a></b> : <></>}
                        </p>
                    </div>
            }
        </section>
    )
}