import React, { useState, useEffect } from "react";
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Body from '../components/servizi/body-servizi'

function Propietari(){

    const [servizi, setServizi] = useState([Object, Object, Object]);

    useEffect(() => {
        fetch("http://localhost:3000/servizi")
            .then((res) => res.json())
            .then((res) => setServizi(res))
    }, []);

    return(
        <>
            <Navbar />
            <Body counter={2} servizi={servizi}/>
            <Footer /> 
        </>        
    )
}

export default Propietari;