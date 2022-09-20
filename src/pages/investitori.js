import React, { useState, useEffect } from "react";
import Body from '../components/servizi/body-servizi';
import { client } from "../client/client";
import Loading from "../components/loading/loading";
import { imgInvestitori } from "../utils/ImageUtils";

function Investirori() {

    const [servizi, setServizi] = useState();
    const img = imgInvestitori;

    useEffect(() => {
        client.getServizi()
            .then((res) => setServizi(res))
    }, []);
    
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