import React from "react";
import './modalStyle.scss';

function Modal(props) {
  console.log("MODAL", props)

  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="modalTitle">
          <h2>{props.art.titolo}</h2>
          <button className="modalClose" onClick={() => { props.setModal(false) }}>X</button>
        </div>

        <div className="modalContent">
          <p>{props.art.testo.content[0].content[0].value}</p>
        </div>
      </div>
    </div>
  )
}
export default Modal;