import "./contactStyle.scss";
import call from "../../images/call.svg";
import email from "../../images/email.svg";

export default function Contact() {
    return (
        <section className="contact">
            <div className="contact-card">
                <img src={call} className="contact-icon" alt="call us" />
                <p>Chiamaci:</p>
                <small className="blue">+39 3484414871</small>
            </div>
            <div className="contact-card">
                <img src={email} className="contact-icon" alt="email us" />
                <p>Scrivici:</p>
                <a href="mailto:alessandro.barra@re-hub-it" className="blue">
                    alessandro.barra@re-hub-it</a>  
            </div>
        </section>
    )
}