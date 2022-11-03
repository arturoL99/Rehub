import React, { useState, useEffect } from "react";
import Annunci from "../components/annunci/annunci";
import contentfulClient from "../client/client";
import Loading from "../components/loading/loading";

function Proprietà(){
    const [annunci, setAnnunci] = useState();
    useEffect(() => {
        contentfulClient.getEntries({
            content_type: "annunci"
        })
            .then((entry) => setAnnunci(entry.items))
            .catch(console.error)
    }, []);
    
    if(!annunci) return <Loading />
    return(
        <>
            <Annunci annunci={annunci} />
        </>        
    )
}

export default Proprietà;