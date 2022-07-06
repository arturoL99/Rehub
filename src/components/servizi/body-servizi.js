import React, { useState, useEffect } from "react";
import Style from './servStyle.scss';
import img1 from '../../style/servizi1.jpeg';
import img2 from '../../style/servizi2.jpeg';


function BodyServizi(props) {
    
const servizio=Object.values(props.servizi[props.counter]);
const lista_servizi=servizio[4];
     
    return (
        <section id="main">
            <div className="main_top">
                <div className="card">
                    <h2 className="px-15">{servizio[0]}</h2>
                    <h3 className="px-15">{servizio[1]}</h3>
                    <p className="px-15">{servizio[2]}</p>
                </div>
                <div>
                    <img src={img1} alt="lavoratori felici" className="img_fluid"/>
                </div>
            </div>

            <div className="main_bottom">
                <div className="card">
                    <h2 className="px-40">{servizio[3]}</h2>
                    <ul>
                        {lista_servizi?.map(serv =><li key={serv}>{serv}</li>)}
                    </ul>
                </div>
                <div>
                    <img src={img2} alt="collaborazione" className="img_fluid"/>
                </div>
            </div>
        </section>
    )
}

export default BodyServizi;