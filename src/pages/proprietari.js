import React, { useState, useEffect } from "react";
import Body from '../components/servizi/body-servizi';
import contentfulClient, { client } from "../client/client";
import Loading from "../components/loading/loading";
import { imgProprietari } from "../utils/ImageUtils";

function Propietari() {

    const [servizi, setServizi] = useState();
    const img = imgProprietari;

    useEffect(() => {
        contentfulClient.getEntry('bkYlKsP6K7LDMsRifGGVp')
            .then((entry) => setServizi(entry.fields))
            .catch(console.error)
    }, []);

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