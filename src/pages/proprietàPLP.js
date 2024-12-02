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
                <AnnunciTemplate tipoAnnuncio="end" annunci={annunci} title="Utilizzatori - Corporate e Famiglie" image={homeIcon} />                
                <AnnunciTemplate tipoAnnuncio="core" annunci={annunci} title="Investitori Core" image={coinIcon} />
                <AnnunciTemplate tipoAnnuncio="value" annunci={annunci} title="Investitori Value Added" image={craneIcon} />
                <h3>Contattaci per approfondire queste iniziative e per scoprire tutte le altre iniziative promosse da Re-Hub</h3>
            </div>
            {/* <Annunci annunci={annunci} /> */}
        </div>
    )
}

export default Proprietà;