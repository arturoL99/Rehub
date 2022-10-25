import React, { useState, useEffect } from 'react';
import contentfulClient from '../../client/client';
import Article from './article';

export default function ArticleContainer() {

    const [art, setArt] = useState(null);

    useEffect(() => {
        contentfulClient.getEntries({
            content_type: "blog"
        }).then((entry) => setArt(entry));
    }, []);

    return (
        <>
            {
                art && art.map((art =>
                    <Article prop={art} key={art.id} />))
            }
        </>
    )
}