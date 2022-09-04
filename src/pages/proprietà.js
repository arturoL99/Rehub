import React from "react";
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Annunci from "../components/annunci/annunci";
import Ricerca from "../components/ricerca/ricerca";

function Proprietà(){
    return(
        <>
            <Navbar/>
            <Annunci />
            <Footer/>  
        </>        
    )
}

export default Proprietà;