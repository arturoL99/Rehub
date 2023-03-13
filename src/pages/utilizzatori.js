import React, { useState, useEffect, useContext } from "react";
import Body from '../components/servizi/body-servizi';
import contentfulClient from "../client/client";
import Loading from "../components/loading/loading";
import { imgUtilizzatori } from "../utils/ImageUtils";
import Context from "../contextProvider";

function Utilizzatori() {

    const { language } = useContext(Context);
    const [servizi, setServizi] = useState();
    const img = imgUtilizzatori;

    useEffect(() => {
        {
            language === "it" ?
                contentfulClient.getEntry('1dpDs7oWhRM5jH1IzzknaW')
                    .then((entry) => setServizi(entry.fields))
                    .catch(console.error)
                :
                contentfulClient.getEntry('31xnlmXsXtUDVWhL5jZ2jQ')
                    .then((entry) => setServizi(entry.fields))
                    .catch(console.error)
        }
    }, [language]);

    if (servizi) {
        return (
            <>
                <Body counter={0} servizi={servizi} img={img} />
            </>
        )
    } else {
        return (
            <Loading />
        )
    }
}

export default Utilizzatori;