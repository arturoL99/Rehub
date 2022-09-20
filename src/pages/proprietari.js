import React, { useState, useEffect } from "react";
import Body from '../components/servizi/body-servizi';
import { client } from "../client/client";
import Loading from "../components/loading/loading";
import { imgProprietari } from "../utils/ImageUtils";

function Propietari(){

    const [servizi, setServizi] = useState();
    const img = imgProprietari;

    useEffect(() => {
        client.getServizi()
            .then((res) => setServizi(res))
    }, []);

    if(servizi){
    return(
        <>
            <Body counter={2} servizi={servizi} img={img} />
        </>        
    )
    }else{
        return(
            <Loading />
        )
    }
}

export default Propietari;