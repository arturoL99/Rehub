import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/logoReHub.png'
import './navStyle.scss';

export default function Navbar() {

    const [isOpen, setOpen] = useState(false);

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
                    <img src="https://img.icons8.com/ios/50/000000/menu--v1.png" alt='menu button'
                        onClick={handleOpen} />
                </div>
            </div>
            <div className={isOpen ? "nav_open" : "nav"}>
                <Link to={"/"} className="mx-15 py-20">Home</Link>
                <Link to={"/servizi/utilizzatori"} className="mx-15 py-20">Servizi</Link>
                {/* <div className='dropdown_content'>
                    <Link to={"/servizi"} className="mx-15 py-20">Servizi</Link>
                    <Link to={"/servizi"} className="mx-15 py-20">Servizi</Link>
                    <Link to={"/servizi"} className="mx-15 py-20">Servizi</Link>
                </div> */}
                <Link to={"/proprieta"} className="mx-15 py-20">Cerca una proprietà</Link>
                <Link to={"/blog"} className="mx-15 py-20">Blog</Link>
                <a href="#" className="mx-15 py-20">Contatti</a>
                <Link to={"/join"} className="mx-15 py-20">Join us</Link>
                <a href="#" className="mx-15 py-20">IT</a>
            </div>
        </header>
    )

}