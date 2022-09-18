import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logoReHub.png';
import x from "../../images/x-full.svg";
import './navStyle.scss';

export default function Navbar() {

    const [isOpen, setOpen] = useState(false);
    const [drop, setDrop] = useState(false);
    const activeColor = { color:'#28669f' };
    const handleOpen = () => {
        setOpen(!isOpen);
    };

    return (
        <section className='navbar'>
            <div className="container">
                <div className='logoContainer'>
                    <img src={logo} alt="logo re-hub" className="logo" />
                    <p className="mx-15 logo-title py-10">RE-Hub <br />Real Estate Hub <br />Advisory & Agency</p>
                </div>
                <div className='menu'>
                    <img src={isOpen ? x : "https://img.icons8.com/ios/50/000000/menu--v1.png"}
                        alt='menu button' onClick={handleOpen} />
                </div>
            </div>
            <div className={isOpen ? "nav_open" : "nav"}>
                <NavLink to={"/"} className={({ isActive }) => isActive ? "active mx-15 py-20" : "mx-15 py-20"}>
                    Home</NavLink>
                <div className="dropdown-container" onMouseEnter={() => setDrop(true)}
                    onMouseLeave={() => setDrop(false)}>
                    <a id="servizi" className="mx-15 py-20 hideMobile">Servizi</a>
                    <div className={drop ? 'dropdown_content py-10' : "hideDesktop"}>
                        <NavLink to={"/servizi/utilizzatori"} className= "mx-15 py-10">
                            Utilizzatori</NavLink>
                        <NavLink to={"/servizi/proprietari"} className="mx-15 py-10">Proprietari</NavLink>
                        <NavLink to={"/servizi/investitori"} className="mx-15 py-10">Investitori</NavLink>
                    </div>
                </div>
                <NavLink to={"/proprieta"} className="mx-15 py-20">Cerca una proprietà</NavLink>
                <NavLink to={"/news"} className="mx-15 py-20">News</NavLink>
                <NavLink to={"/join"} className="mx-15 py-20">Contatti</NavLink>
            </div>
        </section>
    )

}