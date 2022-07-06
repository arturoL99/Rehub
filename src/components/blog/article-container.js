import React, { useState, useEffect } from 'react';
import Article from './article';

export default function ArticleContainer() {

    const [art, setArt]= useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/articles")
            .then((res) => res.json())
            .then((res) => setArt(res))         
    }, []);

    console.log(art)
    return (
        <>
        {
        art && art.map((art=>
        <Article prop={art} key={art.id}/>))
        }        
        </>
    )
}