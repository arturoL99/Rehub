import React, { useEffect, useState } from "react";
import './annunciStyle.scss';
import CardAnnuncio from "./cardAnnuncio";
import { NavLink } from 'react-router-dom';
import Loading from "../loading/loading.js";

function Annunci(props) {
    const [annunci, setAnnunci] = useState();
    //da spostare in utils
    const sortAnnunci = () => {
        const annunci = [];
        props.annunci.map((annuncio =>
            annuncio.fields.inEvidenza ? annunci.unshift(annuncio) : annunci.push(annuncio)
        ))
        return annunci;
    }
    useEffect(() => {
        setAnnunci(sortAnnunci());
    }, [])
    if(!annunci) return <Loading />
    return (
        <section id="main-proprietà">
            <div className="container-annunci">
                {/* <Ricerca /> */}
                <div className="annunci">
                    {
                        annunci.map((annuncio =>
                            <NavLink to={"/proprieta/" + annuncio.sys.id} className="link_annuncio">
                                <CardAnnuncio annuncio={annuncio.fields} key={annuncio.sys.id} />
                            </NavLink>
                        ))
                    }
                </div>
            </div>

            <div className="cont-mappa">
                <iframe src="https://www.google.com/maps/d/u/1/embed?mid=121KvL2raH5UsB8uqaLoB4JTtCtWw_XU&ehbc=2E312F" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mappa" />
            </div>
        </section>
    )
}
export default Annunci;