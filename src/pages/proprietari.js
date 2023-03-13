import React, { useState, useEffect, useContext } from "react";
import Body from '../components/servizi/body-servizi';
import contentfulClient, { client } from "../client/client";
import Loading from "../components/loading/loading";
import { imgProprietari } from "../utils/ImageUtils";
import Context from "../contextProvider";

function Propietari() {

    const { language } = useContext(Context);
    const [servizi, setServizi] = useState();
    const img = imgProprietari;

    useEffect(() => {
        language === "it" ?
            contentfulClient.getEntry('bkYlKsP6K7LDMsRifGGVp')
                .then((entry) => setServizi(entry.fields))
                .catch(console.error)
            :
            contentfulClient.getEntry('2XsHI8yBbf7hbhf9NE5dfB')
                .then((entry) => setServizi(entry.fields))
                .catch(console.error)
    }, [language]);

    if (servizi) {
        return (
            <>
                <Body servizi={servizi} img={img} />
            </>
        )
    } else {
        return (
            <Loading />
        )
    }
}

export default Propietari;