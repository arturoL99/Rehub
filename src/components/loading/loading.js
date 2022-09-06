import React from "react";
import load from '../../images/Loading.svg';

const Loading = () => {
    return (
        <div className="centered">
            <img src={load} alt='loading' />
        </div>
    )
}

export default Loading;