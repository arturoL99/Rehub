import React, { useState, useEffect, useContext } from "react";
import Body from '../components/servizi/body-servizi';
import contentfulClient from "../client/client";
import Loading from "../components/loading/loading";
import { imgInvestitori } from "../utils/ImageUtils";
import Context from "../contextProvider";

function Investirori() {

    const { language } = useContext(Context);
    const [servizi, setServizi] = useState();
    const img = imgInvestitori;

    useEffect(() => {
        {
            language === "it" ?
                contentfulClient.getEntry('6VpEOuP5yhL0CCWoYpauTR')
                    .then((entry) => setServizi(entry.fields))
                    .catch(console.error)
                :
                contentfulClient.getEntry('68eeOLxsopzWxN7z1Nw14V')
                    .then((entry) => setServizi(entry.fields))
                    .catch(console.error)
        }
    }, [language]);

    if (servizi) {
        return (
            <>
                <Body counter={1} servizi={servizi} img={img} />
            </>
        )
    } else {
        return (
            <Loading />
        )
    }
}

export default Investirori;