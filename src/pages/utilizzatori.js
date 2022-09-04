import React, { useState, useEffect } from "react";
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Body from '../components/servizi/body-servizi'

function Utilizzatori(){

    const [servizi, setServizi] = useState();

    useEffect(() => {
        fetch(process.env.REACT_APP_API_BASE_URL + "/servizi")
            .then((res) => res.json())
            .then((res) => setServizi(res))
    }, []);

    if(servizi){
    return(
        <>
            <Navbar />
            <Body counter={0} servizi={servizi}/>
            <Footer /> 
        </>        
    )
    }else{
        return(
            <h1>LOADING</h1>
        )
    }
}

export default Utilizzatori;