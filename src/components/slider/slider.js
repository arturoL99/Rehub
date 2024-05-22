import React, { useEffect, useState } from "react";
import Loading from "../loading/loading";
import "./slider.scss";
import arrow from "../../images/icons8-freccia.webp";
import spinner from "../../images/spinner.svg";

export default function Slider(props) {
    const [immagini, setImmagini] = useState(props.immagini);
    const [counter, setCounter] = useState(0);
    const [open, setOpen] = useState(false);
    const [showArrow, setShowArrow] = useState(true);

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

    useEffect(() => {
        if(immagini.length === 1) setShowArrow(false);
    },[])

    if (!immagini) return <Loading />;
    return (
        <div className={open ? "slider_container_open" : "slider_container"}>
            <div className={showArrow ? "slider_arrow_left" : "hide"}>
                <img src={arrow} onClick={indietro} className="slider_arrow" />
            </div>
            <div style={imgStyles} className="slide"
                onClick={() => setOpen(!open)}></div>
            <div className={showArrow ? "slider_arrow_right" : "hide"}>
                <img src={arrow} onClick={avanti} className="slider_arrow" />

            </div>
            <p className={open ? "slider_counter_open" : "slider_counter"}>{counter + 1}/{immagini.length}</p>
            <img src={spinner}  className="slider_spinner" />
        </div>
    )
}