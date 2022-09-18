import React, { useState, useEffect } from "react";
import Body from '../components/servizi/body-servizi';
import { client } from "../client/client";
import Loading from "../components/loading/loading";

function Propietari(){

    const [servizi, setServizi] = useState();

    useEffect(() => {
        client.getServizi()
            .then((res) => setServizi(res))
    }, []);

    if(servizi){
    return(
        <>
            <Body counter={2} servizi={servizi}/>
        </>        
    )
    }else{
        return(
            <Loading />
        )
    }
}

export default Propietari;