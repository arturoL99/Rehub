import React, { useContext } from "react";
import Context from "../../contextProvider";
import '../home/homeStyle.scss';
import './inEvidenza.scss';
import Loading from "../loading/loading";

export default function InEvidenza(props) {
    const { language } = useContext(Context);
    if (!props.immobile) return <Loading />
    return (
        <section className={props.visible ? "hero evidence" : "hide"}>
            <div className={`bgImg`}
                style={{
                    backgroundImage: `url(${props.immobile.fields.fotoHome.fields.file.url})`
                }}></div>
            {
                language === "it" ?
                    <div className="hero_text">
                        <h2 className="text-shadow">{props.immobile.fields.nome}</h2>
                        <div className="btns">
                            <a href={"/proprieta/" + props.immobile.sys.id} className="hero_btn">Scopri di più</a>
                        </div>
                    </div> :
                    <div className="hero_text">
                        <h2 className="text-shadow">{props.immobile.fields.nome}</h2>
                        <div className="btns">
                            <a href={"/proprieta/" + props.immobile.sys.id} className="hero_btn">Scopri di più</a>
                        </div>
                    </div>
            }
        </section>
    )
}