import React, { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import './joinStyle.scss';
import Context from "../../contextProvider";

function BodyJoin() {

    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [mail, setMail] = useState("");
    const [messaggio, setMessaggio] = useState("");
    const form = useRef();
    const { language } = useContext(Context);
    const sendEmail = (e) => {
        if (nome, cognome, mail, messaggio !== "") {
            e.preventDefault();

            emailjs.sendForm(`${process.env.REACT_APP_MAIL_SERVICE_ID}`,
                `${process.env.REACT_APP_MAIL_TEMPLATE_ID}`, e.target,
                `${process.env.REACT_APP_MAIL_PUBLIC_KEY}`)
                .then((result) => {
                    alert("Messaggio inviato, ti risponderemo il prima possibile.", result.text);
                },
                    (error) => {
                        alert("An error occurred, Please try again", error.text);
                    });
        } else {
            console.log("campo vuoto");
        }
    };

    return (
        <section id="form-contatti">
            {
                language === "it" ?
                    <>
                        <div className="cont_top">
                            <h2>Hai qualsiasi dubbio, o necessiti di informazioni aggiuntive? </h2>
                            <h3>Completa questo form e risponderemo alle tue domande</h3>
                        </div><div className="cont_form">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="row1 my-20">
                                    <input type="text" name="name" placeholder="Nome" className="row1_content" onChange={(e) => setNome(e.target.value)} required />
                                    <input type="text" name="surname" placeholder="Cognome" className="row1_content" onChange={(e) => setCognome(e.target.value)} required />
                                </div>
                                <div className="row2 my-20">
                                    <input type="email" name="email" placeholder="Email" className="row2_content"
                                        onChange={(e) => setMail(e.target.value)} required />
                                </div>
                                <div className="row2 my-20">
                                    <textarea name="messaggio" placeholder="Inserisci il tuo messaggio qui" rows={10} className="row2_content" onChange={(e) => setMessaggio(e.target.value)} required />
                                </div>
                                <div className="row3 my-20">
                                    <input type="submit" value="Invia" className="form_btn" />
                                </div>
                            </form>
                        </div>
                    </>
                    : <>
                        <div className="cont_top">
                            <h2>Do you have any doubts or need additional informations? </h2>
                            <h3>Fill this form and we will answer your questions</h3>
                        </div><div className="cont_form">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="row1 my-20">
                                    <input type="text" name="name" placeholder="Name" className="row1_content" onChange={(e) => setNome(e.target.value)} required />
                                    <input type="text" name="surname" placeholder="Last Name" className="row1_content" onChange={(e) => setCognome(e.target.value)} required />
                                </div>
                                <div className="row2 my-20">
                                    <input type="email" name="email" placeholder="Email" className="row2_content"
                                        onChange={(e) => setMail(e.target.value)} required />
                                </div>
                                <div className="row2 my-20">
                                    <textarea name="messaggio" placeholder="Message" rows={10} className="row2_content" onChange={(e) => setMessaggio(e.target.value)} required />
                                </div>
                                <div className="row3 my-20">
                                    <input type="submit" value="Send" className="form_btn" />
                                </div>
                            </form>
                        </div>
                    </>
            }
        </section>
    )
}

export default BodyJoin;