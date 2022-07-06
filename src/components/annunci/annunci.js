import React, { useState, useEffect } from "react";
import Style from './annunciStyle.scss';
import Ricerca from "../ricerca/ricerca";
import Annuncio from "./annuncio";

function Annunci(props) {

    const [annunci, setAnnunci] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/annunci")
            .then((res) => res.json())
            .then((res) => setAnnunci(res))
    }, []);

    const bg_card=["card", "card bg_card1", "card bg_card2", "card bg_card3", "card bg_card4", "card bg_card5"]

    return (
        <section id="main-proprietà">
            <div className="container-annunci">
                {/* <Ricerca /> */}
                <div className="annunci">
                    
                        {
                            annunci && annunci.map((annunci =>
                                <div className={bg_card[annunci.id]}>
                                <Annuncio prop={annunci} key={annunci.id} />
                                </div>
                                ))
                        }
                    
                </div>
            </div>

            <div className="cont-mappa">
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1li0d-RlMzxv2ImynT_0RqWudN_jShfhD&ehbc=2E312F" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mappa" />
            </div>
        </section>
    )
}
export default Annunci;