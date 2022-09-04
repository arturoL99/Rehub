import React, {useState} from "react";
import './artStyle.scss';
import Modal from '../modal/modal';

export default function Article(prop) {

    const deleteArticle= (e)=>{
        fetch(`http://localhost:3000/articles/${prop.prop.id}`, {
            method: "DELETE",	        
        })
            .then((res)=>res.json());
    }

    const[modal, setModal]= useState(false);
    const art=prop.prop;    


    return (
        <article className="content__card my-10">
            <h2>{prop.prop.title}</h2>
            <div id="art-img" className="my-10">
                <img src={prop.prop.img} alt="stock tech" className="img-fluid"/>
            </div>            
            <p className="content__tag">{prop.prop.tag}</p>
            <div id="art-p">
                <p id="art-description">{prop.prop.description}</p>
            </div>            
            <div className="content__btn">
                <a href="#" onClick={(e)=>{
                    e.preventDefault();
                    setModal(true);
                    }}>See more</a>
                {modal && <Modal setModal={setModal} art={art} />}
            </div>        
        </article>
    )
}







