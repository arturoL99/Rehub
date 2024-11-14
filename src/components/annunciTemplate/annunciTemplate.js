import React, { useState, useEffect } from "react";
import './annunciTemplate.scss';
import { NavLink } from "react-router-dom";
import Loading from "../loading/loading";


export default function AnnunciTemplate(prop) {
    const [filteredAnnunci, setFilteredAnnunci] = useState();
    useEffect(() => {
        setFilteredAnnunci(prop.annunci.filter(item => item.fields.tipoAnnuncio === prop.tipoAnnuncio))
    }, []);
    console.log('filtrati', filteredAnnunci);
    if (!filteredAnnunci) return <Loading />
    return (
        <div className="annunci_container">
            <div className="annunci_title">
                <img src={prop.image} className="icon" alt="" />
                <h2>{prop.title}</h2>
            </div>

            <ul className="annunci_lista">
                {
                    filteredAnnunci.map(annuncio => (
                        <li key={annuncio.sys.id}>
                            <NavLink to={"/proprieta/" + annuncio.sys.id}>
                                {annuncio.fields.nome}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}