import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.webp';
import x from "../../images/x-full.svg";
import { useLockScroll } from '../../utils/useLockScroll';
import './navStyle.scss';

export default function Navbar() {

    const [isOpen, setOpen] = useState(false);
    const [drop, setDrop] = useState(false);
    const { lockScroll, unlockScroll } = useLockScroll();

    const handleOpen = () => {
        setOpen(!isOpen);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        isOpen ? lockScroll() : unlockScroll();
    }, [isOpen])

    return (
        <section className='navbar'>
            <div className="container">
                <div className='logoContainer'>
                    <img src={logo} alt="logo re-hub" className="logo" />
                    {/* <p className="mx-15 logo-title py-10">RE-Hub <br />Real Estate Hub <br />Advisory & Agency</p> */}
                </div>
                <div className='menu'>
                    <img src={isOpen ? x : "https://img.icons8.com/ios/50/000000/menu--v1.png"}
                        alt='menu button' onClick={handleOpen} />
                </div>
            </div>
            <div className={isOpen ? "nav_open" : "nav"}>
                <NavLink to={"/"} onClick={handleClose}
                    className={({ isActive }) => isActive ? "active mx-15" : "mx-15"}>
                    Home</NavLink>
                <div className="dropdown hideMobile mx-15">
                    <button className="dropbtn hideMobile">Servizi</button>
                    <div className="dropdown-content">
                        <NavLink to={"/servizi/utilizzatori"}>Utilizzatori</NavLink>
                        <NavLink to={"/servizi/proprietari"}>Propietari</NavLink>
                        <NavLink to={"/servizi/investitori"}>Investirori</NavLink>
                    </div>
                </div>
                <NavLink className="mx-15 hideDesktop" to={"/servizi/utilizzatori"}>Utilizzatori</NavLink>
                <NavLink className="mx-15 hideDesktop" to={"/servizi/proprietari"}>Propietari</NavLink>
                <NavLink className="mx-15 hideDesktop" to={"/servizi/investitori"}>Investirori</NavLink>
                {/* <div className="dropdown-container" onMouseEnter={() => setDrop(true)}
                    onMouseLeave={() => setDrop(false)}>
                    <a id="servizi" className="mx-15 hideMobile">Servizi</a>
                    <div className={drop ? 'dropdown_content' : "hideDesktop"}>
                        <NavLink to={"/servizi/utilizzatori"} className="mx-15" onClick={handleClose}>
                            Utilizzatori</NavLink>
                        <NavLink to={"/servizi/proprietari"} className="mx-15" onClick={handleClose}>
                            Proprietari</NavLink>
                        <NavLink to={"/servizi/investitori"} className="mx-15" onClick={handleClose}>
                            Investitori</NavLink>
                    </div>
                </div> */}
                <NavLink to={"/proprieta"} className="mx-15" onClick={handleClose}>
                    Cerca una proprietà</NavLink>
                <NavLink to={"/news"} className="mx-15" onClick={handleClose}>News</NavLink>
                <NavLink to={"/contatti"} className="mx-15" onClick={handleClose}>Contatti</NavLink>
            </div>
        </section>
    )

}