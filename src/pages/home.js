import React, { useState, useEffect } from "react";
import contentfulClient from "../client/client";
import Hero from '../components/home/hero';
import VideoSlider from "../components/home/VideoSlider";
import arrow from "../images/icons8-freccia.webp";
import { previousBanner, nextBanner } from "../utils/SliderUtils.js";
import InEvidenza from "../components/inEvidenza/inEvidenza.js";
import Loading from "../components/loading/loading.js";

function Home() {
    const [immobiliInEvidenza, setImmobiliInEvidenza] = useState();
    const [active, setActive] = useState(0);
    useEffect(() => {
        contentfulClient.getEntries({
            content_type: "alagna"
        })
            .then((entry) => setImmobiliInEvidenza(entry.items))
            .catch(console.error);
    }, []);
    if(!immobiliInEvidenza) return <Loading />
    return (
        <>
            <Hero />
            <h2 className="mb-0">IN EVIDENZA</h2>
            <section className="evidenceContainer">
                <img src={arrow} className="video_arrow rotateLeft" onClick={() => previousBanner(active, setActive, immobiliInEvidenza.length)}/>
                <InEvidenza immobile={immobiliInEvidenza ? immobiliInEvidenza[active].fields : ""} visible={true}/>
                <img src={arrow} className="video_arrow rotateRight" onClick={() => nextBanner(active, setActive, immobiliInEvidenza.length)}/>
            </section>
            {/* <VideoSlider /> */}
        </>
    )
}

export default Home;