import React from "react";
import Style from './ricercaStyle.scss'

function Ricerca() {
    return (
        <section id="ricerca">
            <form>
                <div className="form-group">
                    <select name="regioni">
                        <option>Regioni</option>
                        <option>Lombardia</option>
                        <option>Piemonte</option>
                    </select>
                </div>
                <div className="form-group">
                    <select name="lifestyle">
                        <option>Lifestyle</option>
                        <option>Uffici</option>
                        <option>Residenziale</option>
                    </select>
                </div>
                <div className="form-group">
                    <select name="metri">
                        <option>Metri²</option>
                        <option>50-100 m²</option>
                        <option>100m²+</option>
                    </select>
                </div>
                <button>CERCA</button>
            </form>
        </section>
    )
}

export default Ricerca;