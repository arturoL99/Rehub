import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import contentfulClient from "../client/client";
import Dettagli from "../components/dettagli/dettagli";
import Loading from "../components/loading/loading";
import Slider from "../components/slider/slider";
import Map from "../components/map/map";

function ProprietàSingola() {
    const { id } = useParams();
    const [proprieta, setProprieta] = useState();

    useEffect(() => {
        contentfulClient.getEntry(id).then((res) => {
            setProprieta(res.fields);
        });
    }, []);

    if (!proprieta) return <Loading />
    return (
        <>
            <h2 className="my-20">{proprieta.nome}</h2>
            <section className="proprieta_container">
                <div className="proprieta_left">
                    <Slider immagini={proprieta.media} />
                    <Map proprieta={proprieta} />
                </div>
                <Dettagli proprieta={proprieta} />
            </section>
        </>
    )
}

export default ProprietàSingola;