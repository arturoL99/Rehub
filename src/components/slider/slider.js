import React, { useState } from "react";
import Loading from "../loading/loading";
import "./slider.scss";
import arrow from "../../images/icons8-freccia.webp";

export default function Slider(props) {
    const [immagini, setImmagini] = useState(props.immagini);
    const [counter, setCounter] = useState(0);
    const [open, setOpen] = useState(false);

    const avanti = () => {
        if (counter < immagini.length - 1) setCounter(counter + 1);
        else setCounter(0);
    }

    const indietro = () => {
        if (counter > 0) setCounter(counter - 1);
        else setCounter(immagini.length - 1);
    }

    const imgStyles = {
        backgroundImage: `url(${immagini[counter].fields.file.url})`
    };
    if (!immagini) return <Loading />;
    return (
        <div className={open ? "slider_container_open" : "slider_container"}>
            <div className="slider_arrow_left">
                <img src={arrow} onClick={indietro} className="slider_arrow" />
            </div>
            <div style={imgStyles} className="slide"
                onClick={() => setOpen(!open)}></div>
            {/* <img src={immagini[counter].fields.file.url}
                className={open ? "slider_img_open" : "slider_img"} onClick={() => setOpen(!open)} /> */}
            <div className="slider_arrow_right">
                <img src={arrow} onClick={avanti} className="slider_arrow" />

            </div>
            <p className={open ? "slider_counter_open" : "slider_counter"}>{counter + 1}/{immagini.length}</p>
        </div>
    )
}