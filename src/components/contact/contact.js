import "./contactStyle.scss";
import call from "../../images/call.svg";
import email from "../../images/email.svg";
import { useContext } from "react";
import Context from "../../contextProvider";

export default function Contact() {
    const { language } = useContext(Context);
    return (
        <section className="contact">
            {language === "it" ?
                <>
                    <div className="contact-card">
                        <img src={call} className="contact-icon" alt="call us" />
                        <p>Chiamaci:</p>
                        <small className="blue">+39 3484414871</small>
                    </div><div className="contact-card">
                        <img src={email} className="contact-icon" alt="email us" />
                        <p>Scrivici:</p>
                        <a href="mailto:direzione@re-hub.it" className="blue">
                            direzione@re-hub.it</a>
                        <a href="mailto:alessandro.barra@re-hub-it" className="blue">
                            alessandro.barra@re-hub-it</a>
                    </div>
                </>
                :
                <>
                    <div className="contact-card">
                        <img src={call} className="contact-icon" alt="call us" />
                        <p>Call us:</p>
                        <small className="blue">+39 3484414871</small>
                    </div><div className="contact-card">
                        <img src={email} className="contact-icon" alt="email us" />
                        <p>Email us:</p>
                        <a href="mailto:direzione@re-hub.it" className="blue">
                            direzione@re-hub.it</a>
                        <a href="mailto:alessandro.barra@re-hub-it" className="blue">
                            alessandro.barra@re-hub-it</a>
                    </div>
                </>
            }
        </section>
    )
}