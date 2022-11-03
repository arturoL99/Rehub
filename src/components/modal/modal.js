import React from "react";
import './modalStyle.scss';

function Modal(props) {
  console.log("MODAL", props)

  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="modalTitle px-15">
          <h2>{props.art.titolo}</h2>
          <button className="modalClose" onClick={() => { props.setModal(false) }}>X</button>
        </div>

        <div className="modalContent px-15">
          <p>{props.art.testo.content[0].content[0].value}</p>
          <h1></h1>
          <p>{props.art.paragrafo2}</p>
        </div>
      </div>
    </div>
  )
}
export default Modal;