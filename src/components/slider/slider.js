import React, { useState } from "react";
import Loading from "../loading/loading";
import "./slider.scss";
import leftArrow from "../../images/arrowLeft.png";
import rightArrow from "../../images/arrowRight.png";

export default function Slider(props) {
    const [immagini, setImmagini] = useState(props.immagini);
    const [counter, setCounter] = useState(0);

    const avanti = () => {
        if (counter < immagini.length - 1) setCounter(counter + 1);
        else setCounter(0);
    }

    const indietro = () => {
        if (counter > 0) setCounter(counter - 1);
        else setCounter(immagini.length - 1);
    }

    if (!immagini) return <Loading />;
    return (
        <div className="slider_container">
            <div>
                <img src={leftArrow} onClick={indietro} className="slider_arrow" />
            </div>
            <img src={immagini[counter].fields.file.url} className="slider_img" />
            <div>
                <img src={rightArrow} onClick={avanti} className="slider_arrow" />
                <p className="slider_counter">{counter + 1}/{immagini.length}</p>
            </div>
        </div>
    )
}