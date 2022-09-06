import React from "react";
import './footStyle.scss';
import Logo from '../../images/logoReHub.png';

export default function footer() {
    return (
        <footer>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Servizi</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/join">Contatti</a></li>
            </ul>
            <ul>
                <li><img src={Logo} className="footerLogo" alt="rehub logo" /></li>
            </ul>
            <ul className="cerca">
                <li>Cerca una proprietà :</li>
                <li><a>Cerca per regione</a></li>
                <li><a>Cerca per lifestyle</a></li>
            </ul>

        </footer>
    )
}