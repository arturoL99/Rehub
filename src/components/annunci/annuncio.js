import React from 'react';

function Annuncio(props) {
    return (
        <>
            <h1 className="card-content">{props.prop.title}</h1>
            <h4 className="card-content">{props.prop.indirizzo}</h4>
            <div className="card-container">
                <p>{props.prop.metri}</p>
                <button className="card-btn">Scopri &#8594;</button>
            </div>
        </>
    )
}

export default Annuncio;