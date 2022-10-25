import React, { useState, useEffect } from "react";
import Body from '../components/servizi/body-servizi';
import contentfulClient from "../client/client";
import Loading from "../components/loading/loading";
import { imgUtilizzatori } from "../utils/ImageUtils";

function Utilizzatori() {

    const [servizi, setServizi] = useState();
    const img = imgUtilizzatori;

    useEffect(() => {
        contentfulClient.getEntry('1dpDs7oWhRM5jH1IzzknaW')
            .then((entry) => setServizi(entry.fields))
            .catch(console.error)
    }, []);

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