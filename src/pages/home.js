import React, {useState, useEffect, useContext} from "react";
import contentfulClient from "../client/client";
import Hero from '../components/home/hero';
import VideoSlider from "../components/home/VideoSlider";
import Alagna from "../components/alagna/Alagna";
import Context from "../contextProvider";

function Home() {
    const [alagna, setAlagna] = useState();
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
            <Alagna alagna={alagna? alagna[0].fields : ""}/>
            <VideoSlider />
        </>
    )
}

export default Home;