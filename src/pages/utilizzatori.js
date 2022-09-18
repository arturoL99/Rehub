import React, { useState, useEffect } from "react";
import Body from '../components/servizi/body-servizi';
import { client } from "../client/client";
import Loading from "../components/loading/loading";

function Utilizzatori(){

    const [servizi, setServizi] = useState();

    useEffect(() => {
        client.getServizi()
            .then((res) => setServizi(res))
    }, []);

    if(servizi){
    return(
        <>
            <Body counter={0} servizi={servizi}/>
        </>        
    )
    }else{
        return(
            <Loading />
        )
    }
}

export default Utilizzatori;