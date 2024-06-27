import React from "react";
import './modalStyle.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function Modal(props) {
  return (
    <div className="modalContainer">
      <div className="modal">
        <div className="modalTitle">
          <h2>{props.art.titolo}</h2>
          <button className="modalClose" onClick={() => { props.setModal(false) }}>X</button>
        </div>

        <div className="modalContent">
          <p>{documentToReactComponents(props.art.testo)}</p>
          {
            props.art.pdf ? <div className="btns">
              <a href={"https:" + props.art.pdf.fields.file.url} target="/" className="hero_btn">Scopri di più</a>
            </div> : <></>
          }

        </div>
      </div>
    </div>
  )
}
export default Modal;