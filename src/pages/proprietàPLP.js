import React, { useState, useEffect, useContext } from "react";
import Annunci from "../components/annunci/annunci";
import contentfulClient from "../client/client";
import Loading from "../components/loading/loading";
import Context from "../contextProvider";

function Proprietà() {
    const { language } = useContext(Context);
    const [annunci, setAnnunci] = useState();
    useEffect(() => {
        language === "it" ?
            contentfulClient.getEntries({
                content_type: "annunci"
            })
                .then((entry) => setAnnunci(entry.items))
                .catch(console.error)
            :
            contentfulClient.getEntries({
                content_type: "annunciInglese"
            })
                .then((entry) => setAnnunci(entry.items))
                .catch(console.error)
    }, [language]);

    if (!annunci) return <Loading />
    return (
        <>
            <Annunci annunci={annunci} />
        </>
    )
}

export default Proprietà;