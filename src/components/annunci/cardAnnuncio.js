import React from 'react';

function CardAnnuncio(props) {
    const imgStyles = {
        backgroundImage: `url(${props.annuncio.copertina.fields.file.url})`
    };
    return (
        <div className='card'>
            <div style={imgStyles} className="card_img"></div>
            {/* <img src={props.annuncio.copertina.fields.file.url} className="card_img" /> */}
            <div className='card-text'>
                <h1 className="card-content">{props.annuncio.nome}</h1>
                <h4 className="card-content">{props.annuncio.indirizzo}</h4>
                <div className="card-container">
                    <p>{props.annuncio.metri}</p>
                    <button className="card-btn">Scopri &#8594;</button>
                </div>
            </div>
        </div>
    )
}

export default CardAnnuncio;