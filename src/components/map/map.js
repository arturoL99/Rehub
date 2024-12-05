import React from "react";

function Map(props) {
    return (
        <>
            {props.proprieta.urlMappa ? <div className="map">
                <iframe src={props.proprieta.urlMappa}
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    className="map" />
            </div> : <></>}
        </>
    )
}

export default Map;