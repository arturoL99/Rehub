import React, { useState } from "react";
import './artStyle.scss';
import Modal from '../modal/modal';

export default function Article(prop) {

    const [modal, setModal] = useState(false);
    const art = prop.prop.fields;
    return (
        <article className="content__card my-10">
            <h2>{art.titolo}</h2>
            <div id="art-img" className="my-10">
                <img src={art.immagine.fields.file.url} alt="stock tech" />
            </div>
            <div>
                <button onClick={() => setModal(true)} className="content__btn">Leggi</button>
                {/* <a href="#" onClick={(e) => {
                    e.preventDefault();
                    setModal(true);
                }}>See more</a> */}
                {modal && <Modal setModal={setModal} art={art} />}
            </div>
        </article>
    )
}







