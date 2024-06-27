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
                    backgroundImage: `url(${props.immobile.foto.fields.file.url})`
                }}></div>
            {
                language === "it" ?
                    <div className="hero_text">
                        <h2 className="text-shadow">{props.immobile.title}</h2>
                        <div className="btns">
                            <a href={"https:" + props.immobile.pdf.fields.file.url} target="/" className="hero_btn">{props.immobile.cta}</a>
                        </div>
                    </div> :
                    <div className="hero_text">
                        <h2 className="text-shadow">{props.immobile.titleEng}</h2>
                        <div className="btns">
                            <a href={"https:" + props.immobile.pdf.fields.file.url} target="/" className="hero_btn">{props.immobile.ctaEng}</a>
                        </div>
                    </div>
            }
        </section>
    )
}