import React, { useState, useEffect } from "react";
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Body from '../components/servizi/body-servizi'
import { client } from "../client/client";

function Investirori() {

    const [servizi, setServizi] = useState();

    useEffect(() => {
        client.getServizi()
            .then((res) => setServizi(res))
    }, []);
    
    if (servizi) {
        return (
            <>
                <Navbar />
                <Body counter={1} servizi={servizi} />
                <Footer />
            </>
        )
    } else {
        return (
            <h1>LOADING</h1>
        )
    }
}

export default Investirori;