import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logoReHub.png';
import x from "../../images/x-full.svg";
import './navStyle.scss';

export default function Navbar() {

    const [isOpen, setOpen] = useState(false);
    const [drop, setDrop] = useState(false);

    const handleOpen = () => {
        setOpen(!isOpen);
    };

    return (
        <header>
            <div className="container">
                <div className='logoContainer'>
                    <img src={logo} alt="logo re-hub" className="logo" />
                    <p className="mx-15 logo-title py-10">Re-Hub <br />Real Estate <br />Advisory & Agency</p>
                </div>
                <div className='menu'>
                    <img src={isOpen ? x : "https://img.icons8.com/ios/50/000000/menu--v1.png"}
                        alt='menu button' onClick={handleOpen} />
                </div>
            </div>
            <div className={isOpen ? "nav_open" : "nav"}>
                <Link to={"/"} className="mx-15 py-20">Home</Link>
                <div className="dropdown-container" onMouseEnter={() => setDrop(true)}
                    onMouseLeave={() => setDrop(false)}>
                    <Link to={""} className="mx-15 py-20 hideMobile">Servizi</Link>
                    <div className={drop ? 'dropdown_content' : "hideDesktop"}>
                        <Link to={"/servizi/utilizzatori"} className="mx-15 py-20">Utilizzatori</Link>
                        <Link to={"/servizi/proprietari"} className="mx-15 py-20">Proprietari</Link>
                        <Link to={"/servizi/investitori"} className="mx-15 py-20">Investitori</Link>
                    </div>
                </div>
                <Link to={"/proprieta"} className="mx-15 py-20">Cerca una proprietà</Link>
                <Link to={"/blog"} className="mx-15 py-20">Blog</Link>
                <Link to={"/join"} className="mx-15 py-20">Contatti</Link>
            </div>
        </header>
    )

}