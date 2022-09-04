import React, { useState } from "react";
import Style from './joinStyle.scss';

function BodyJoin() {

    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [mail, setMail] = useState("");
    const [messaggio, setMessaggio] = useState("");
    const avviso={nome,cognome,mail,messaggio};

    const addAvviso = (e) => {
        if(nome, cognome, mail, messaggio !=""){
          fetch(`http://localhost:3000/messaggi`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(avviso),
        }).then((res) => res.json());
        console.log(avviso);  
        }else{
            console.log("campo vuoto")
        }        
      };

    return (
        <section id="form-contatti">
            <div className="cont_top">
                <h2>Hai qualsiasi dubbio, o necessiti di informazioni aggiuntive? </h2>
                <h3>Completa questo form e risponderemo alle tue domande</h3>
            </div>
            <div className="cont_form">
                <form>
                    <div className="row1 my-20">
                        <input type="text" name="name" placeholder="nome" className="row1_content" onChange={(e) => setNome(e.target.value)} required />
                        <input type="text" name="surname" placeholder="cognome" className="row1_content" onChange={(e) => setCognome(e.target.value)} required/>
                    </div>
                    <div className="row2 my-20">
                        <input type="email" name="email" placeholder="email" className="row2_content"
                            onChange={(e) => setMail(e.target.value)} required />
                    </div>
                    <div className="row2 my-20">
                        <textarea name="messaggio" placeholder="inserisci il tuo messaggio qui" rows={10} className="row2_content" onChange={(e) => setMessaggio(e.target.value)} required />
                    </div>
                    <div className="row3 my-20">
                        <input type="submit" value="Invia" className="form_btn" onClick={addAvviso}/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default BodyJoin;