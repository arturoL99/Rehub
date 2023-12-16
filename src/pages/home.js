import React, { useState, useEffect } from "react";
import contentfulClient from "../client/client";
import Hero from '../components/home/hero';
import VideoSlider from "../components/home/VideoSlider";
import Alagna from "../components/alagna/Alagna";
import arrow from "../images/icons8-freccia.webp";
import { previousBanner, nextBanner } from "../utils/SliderUtils.js";

function Home() {
    const [alagna, setAlagna] = useState();
    const [active, setActive] = useState(2);
    useEffect(() => {
        contentfulClient.getEntries({
            content_type: "alagna"
        })
            .then((entry) => setAlagna(entry.items))
            .catch(console.error);
    }, []);

    return (
        <>
            <Hero />
            <h2 className="mb-0">IN EVIDENZA</h2>
            <section className="evidenceContainer">
                <img src={arrow} className="video_arrow rotateLeft" onClick={() => previousBanner(active, setActive, alagna.length)}/>
                <Alagna alagna={alagna ? alagna[active].fields : ""} visible={true}/>
                <img src={arrow} className="video_arrow rotateRight" onClick={() => nextBanner(active, setActive, alagna.length)}/>
            </section>
            <VideoSlider />
        </>
    )
}

export default Home;