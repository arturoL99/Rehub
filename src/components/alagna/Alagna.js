import React, { useContext } from "react";
import Context from "../../contextProvider";
import '../home/homeStyle.scss';
import './alagna.scss';
import Loading from "../loading/loading";

export default function Alagna(props) {
    const { language } = useContext(Context);
    if (!props.alagna) return <Loading />
    return (
        <section className={props.visible ? "hero evidence" :"hide"}>
            <div className={`bgImg ${props.alagna.classeSfondo}`}></div>
            {
                language === "it" ?
                    <div className="hero_text">
                        <h2 className="text-shadow">{props.alagna.title}</h2>
                        <div className="btns">
                            <a href={"https:" + props.alagna.pdf.fields.file.url} target="/" className="hero_btn">{props.alagna.cta}</a>
                        </div>
                    </div> :
                    <div className="hero_text">
                        <h2 className="text-shadow">{props.alagna.titleEng}</h2>
                        <div className="btns">
                            <a href={"https:" + props.alagna.pdf.fields.file.url} target="/" className="hero_btn">{props.alagna.ctaEng}</a>
                        </div>
                    </div>
            }
        </section>
    )
}