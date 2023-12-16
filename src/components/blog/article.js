import React, { useState, useContext } from "react";
import './artStyle.scss';
import Modal from '../modal/modal';
import Context from "../../contextProvider";

export default function Article(prop) {
    const [modal, setModal] = useState(false);
    const art = prop.prop.fields;
    const { language } = useContext(Context);
    return (
        <article className="content__card my-10">
            <h2>{art.titolo}</h2>
            <div id="art-img" className="my-10">
                <img src={art.immagine.fields.file.url} alt="stock tech" loading="lazy" />
            </div>
            <div>
                {
                    language === "it" ? 
                    <button onClick={() => setModal(true)} className="content__btn">Leggi</button> :
                    <button onClick={() => setModal(true)} className="content__btn">Read</button>
                }
                
                {modal && <Modal setModal={setModal} art={art} />}
            </div>
        </article>
    )
}