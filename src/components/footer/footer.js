import "./footerStyle.scss";
import logo from "../../images/logo.webp";
import Navbar from "../navbar/navbar";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="footer">
                <div className="footer-nav">
                    <Navbar />
                </div>
                <div className="footer-content">
                    <small className="my-5">RE-Hub Srl - 20129 Milano (MI) - Via Francesco Nullo n.5 -
                        Tel.348 4414871 - P.IVA 11191330965 - N.REA MI2585603</small>
                    <small className="my-5">PEC: re-hub@pec.it</small>
                    <small className="my-5">Tutto il contenuto di questo sito è Copyright © RE-Hub Srl -
                        <NavLink to={"/privacy"}>Privacy Policy</NavLink></small>
                        {/* - <NavLink to={"/cookies"}>Cookie Policy</NavLink> */}
                </div>
            </div>
        </footer>
    )
}