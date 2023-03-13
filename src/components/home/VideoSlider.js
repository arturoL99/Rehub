import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../contextProvider";
import arrow from "../../images/icons8-freccia.webp";
import './homeStyle.scss';

export default function VideoSlider() {
    const { language } = useContext(Context);
    console.log(language);
    const switchVideo = () => {
        var videos = document.getElementsByClassName("video");
        for (let video of videos) {
            if (video.className === `video hiddenVideo`) {
                video.classList.remove(`hiddenVideo`);
            }
            else if (video.className === `video`) {
                video.classList.add(`hiddenVideo`);
            }
        };
    }

    return (
        <section className="videoSlider">
            <div className="videos">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/k8K9zR0EA-M?controls=0;autoplay=1&mute=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="video hiddenVideo" />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/JXhhTUbXlfc?controls=0;autoplay=1&mute=1" title="LesaVillaTadini" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="video" />
            </div>
            <div className="video_arrow_cont">
                <img src={arrow} onClick={switchVideo} className="video_arrow" />

            </div>
            {
                language === "it" ? 
                <div className="videoLink">
                    <h2>Le nostre proprietà</h2>
                    <Link to={"/proprieta"} className="form_btn">Esplora</Link>
                </div> : 
                <div className="videoLink">
                    <h2>Our properties</h2>
                    <Link to={"/proprieta"} className="form_btn">See more</Link>
                </div>
            }
        </section>
    )
}