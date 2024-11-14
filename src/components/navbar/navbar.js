import React, { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.webp';
import ita from '../../images/icons8-italy-48.png';
import eng from '../../images/icons8-english-48.png';
import x from "../../images/x-full.svg";
import Context from '../../contextProvider';
import { useLockScroll } from '../../utils/useLockScroll';
import './navStyle.scss';

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const { lockScroll, unlockScroll } = useLockScroll();
    const { language, setLanguage } = useContext(Context);

    const handleOpen = () => {
        setOpen(!isOpen);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const changeLanguage = (lang) => {
        lang === "it" ?
            setLanguage("eng") :
            setLanguage("it")
    }

    useEffect(() => {
        isOpen ? lockScroll() : unlockScroll();
    }, [isOpen])

    return (
        <nav className='navbar'>
            <div className="container">
                <div className='logoContainer'>
                    <NavLink to={"/"} id="link_logo" >
                        <img src={logo} alt="logo re-hub" className="logo" />
                    </NavLink>
                </div>
                <div className='menu'>
                    <img src={isOpen ? x : "https://img.icons8.com/ios/50/000000/menu--v1.png"}
                        alt='menu button' onClick={handleOpen} loading="lazy" />
                </div>
            </div>
            <div className={isOpen ? "nav_open" : "nav"}>
                {
                    language === "it" ?
                        <>
                            <NavLink to={"/"} onClick={handleClose}
                                className={({ isActive }) => isActive ? "active mx-15" : "mx-15"}>
                                Home</NavLink><div className="dropdown hideMobile mx-15">
                                <button className="dropbtn hideMobile">Servizi</button>
                                <div className="dropdown-content">
                                    <NavLink to={"/servizi/utilizzatori"}>Utilizzatori</NavLink>
                                    <NavLink to={"/servizi/proprietari"}>Proprietari</NavLink>
                                    <NavLink to={"/servizi/investitori"}>Investitori</NavLink>
                                </div>
                            </div>
                            <NavLink className="mx-15 hideDesktop" to={"/servizi/utilizzatori"} onClick={handleClose}>Utilizzatori</NavLink>
                            <NavLink className="mx-15 hideDesktop" to={"/servizi/proprietari"} onClick={handleClose}>Proprietari</NavLink>
                            <NavLink className="mx-15 hideDesktop" to={"/servizi/investitori"} onClick={handleClose}>Investitori</NavLink>
                            <NavLink to={"/proprieta"} className="mx-15" onClick={handleClose}>Cerca una proprietà</NavLink>                
                            <NavLink to={"/news"} className="mx-15" onClick={handleClose}>News</NavLink>
                            <NavLink to={"/contatti"} className="mx-15" onClick={handleClose}>Contatti</NavLink>
                        </>
                        :
                        <>
                            <NavLink to={"/"} onClick={handleClose}
                                className={({ isActive }) => isActive ? "active mx-15" : "mx-15"}>
                                Home</NavLink>
                            <div className="dropdown hideMobile mx-15">
                                <button className="dropbtn hideMobile">Services</button>
                                <div className="dropdown-content">
                                    <NavLink to={"/servizi/utilizzatori"}>Users</NavLink>
                                    <NavLink to={"/servizi/proprietari"}>Owners</NavLink>
                                    <NavLink to={"/servizi/investitori"}>Investors</NavLink>
                                </div>
                            </div>
                            <NavLink className="mx-15 hideDesktop" to={"/servizi/utilizzatori"} onClick={handleClose}>Users</NavLink>
                            <NavLink className="mx-15 hideDesktop" to={"/servizi/proprietari"} onClick={handleClose}>Owners</NavLink>
                            <NavLink className="mx-15 hideDesktop" to={"/servizi/investitori"} onClick={handleClose}>Investors</NavLink>
                            <NavLink to={"/proprieta"} className="mx-15" onClick={handleClose}>
                                Properties</NavLink>
                            <NavLink to={"/news"} className="mx-15" onClick={handleClose}>News</NavLink>
                            <NavLink to={"/contatti"} className="mx-15" onClick={handleClose}>Contacts</NavLink>
                        </>
                }
                {/* <p className="mx-15 pointer" onClick={() => changeLanguage(language)}>{language === "it" ?
                    <img src={ita} alt="italiano" className="icon" /> :
                    <img src={eng} alt="english" className="icon" />}
                </p> */}
            </div>
        </nav>
    )

}