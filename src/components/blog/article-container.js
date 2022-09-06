import React, { useState, useEffect } from 'react';
import { client } from '../../client/client';
import Article from './article';

export default function ArticleContainer() {

    const [art, setArt] = useState(null);

    useEffect(() => {
        client.getArticles()
            .then((res) => setArt(res))
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