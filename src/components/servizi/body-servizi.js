import React from "react";
import './servStyle.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function BodyServizi(props) {
    const servizio = props.servizi;
    const lista_servizi = servizio.listaServizi;
    return (
        <section id="main">
            <div className="main_top">
                <div className="card_servizi">
                    <h2 className="px-15">{servizio.titolo}</h2>
                    <h3 className="px-15">{servizio.sottotitolo}</h3>
                    <p className="px-15">{documentToReactComponents(servizio.contenuto)}</p>
                </div>
                <div>
                    <img src={props.img[0]} alt="lavoratori felici" className="img_fluid" />
                </div>
            </div>

            <div className="main_bottom">
                <div className="card_servizi">
                    <h2 className="px-40">{servizio.titolo2}</h2>
                    <ul>
                        {lista_servizi?.map(serv => <li key={serv}>{serv}</li>)}
                    </ul>
                </div>
                <div>
                    <img src={props.img[1]} alt="collaborazione" className="img" />
                </div>
            </div>
        </section>
    )
}

export default BodyServizi;