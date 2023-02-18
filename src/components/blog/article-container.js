import React, { useState, useEffect, useContext } from 'react';
import contentfulClient from '../../client/client';
import Article from './article';
import Loading from "../loading/loading"
import Context from '../../contextProvider';

export default function ArticleContainer() {
    const { language } = useContext(Context);
    const [art, setArt] = useState(null);

    useEffect(() => {
        language === "it" ?
        contentfulClient.getEntries({
            content_type: "blog"
        }).then((entry) => setArt(entry.items))
        :
        contentfulClient.getEntries({
            content_type: "blogInglese"
        }).then((entry) => setArt(entry.items))
    }, [language]);

    if(!art) return <Loading /> 
    return (
        <>
            {
                art && art.map((art =>
                    <Article prop={art} key={art.id} />))
            }
        </>
    )
}