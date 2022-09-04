import React from "react";
import Style from './footStyle.scss'
import Logo from '../../style/logoReHub.png'

export default function footer(){
    return(
        <footer>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Servizi</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contatti</a></li>
        </ul>
        <ul>
            <li><img src={Logo} alt="rehub logo"/></li>
        </ul>
        <ul className="cerca">
            <li>Cerca una proprietà :</li>
            <li><a>Cerca per regione</a></li>
            <li><a>Cerca per lifestyle</a></li>
        </ul>
        
    </footer>
    )
}