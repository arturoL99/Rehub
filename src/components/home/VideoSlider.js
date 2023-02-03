import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bgImg, bgImgMobile } from "../../utils/ImageUtils";
import './homeStyle.scss';

export default function VideoSlider() {
    return (
        <section className="videoSlider">
            <div className="videos">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k8K9zR0EA-M?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video" />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k8K9zR0EA-M?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video" />
            </div>
            <div className="videoLink">
                <h2>Le nostre proprietà</h2>
                <Link to={"/servizi/investitori"} className="hero_btn">Esplora</Link>
            </div>
        </section>
    )
}