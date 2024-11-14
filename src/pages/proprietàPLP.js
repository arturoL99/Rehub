import React, { useState, useEffect, useContext } from "react";
import Annunci from "../components/annunci/annunci";
import contentfulClient from "../client/client";
import Loading from "../components/loading/loading";
import Context from "../contextProvider";
import AnnunciTemplate from "../components/annunciTemplate/annunciTemplate";
import homeIcon from "../images/home.svg";
import craneIcon from "../images/crane.svg";
import coinIcon from "../images/coin.svg";

function Proprietà() {
    const { language } = useContext(Context);
    const [annunci, setAnnunci] = useState();

    useEffect(() => {
        language === "it" ?
            contentfulClient.getEntries({
                content_type: "annunci"
            })
                .then((entry) => setAnnunci(entry.items))
                .catch(console.error)
            :
            contentfulClient.getEntries({
                content_type: "annunciInglese"
            })
                .then((entry) => setAnnunci(entry.items))
                .catch(console.error)
    }, [language]);

    if (!annunci) return <Loading />
    return (
        <div className="annunci_plp">
            <div className="annunci_subContainer">
                <h1>Alcuni esempi di proposte RE-HUB:</h1>
                <AnnunciTemplate tipoAnnuncio="value" annunci={annunci} title="Value Added - Costruire/Riqualificare" image={craneIcon} />
                <AnnunciTemplate tipoAnnuncio="end" annunci={annunci} title="End User - Per Abitare" image={homeIcon} />
                <AnnunciTemplate tipoAnnuncio="core" annunci={annunci} title="Core - Investimento a reddito" image={coinIcon} />
                <h3>Contattaci per approfondire queste iniziative e per scoprire tutte le altre iniziative promosse da Re-Hub</h3>
            </div>
            {/* <Annunci annunci={annunci} /> */}
        </div>
    )
}

export default Proprietà;