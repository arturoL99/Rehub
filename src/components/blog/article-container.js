import React, { useState, useEffect } from 'react';
import contentfulClient from '../../client/client';
import Article from './article';
import Loading from "../loading/loading"

export default function ArticleContainer() {

    const [art, setArt] = useState(null);

    useEffect(() => {
        contentfulClient.getEntries({
            content_type: "blog"
        }).then((entry) => setArt(entry.items));
    }, []);

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