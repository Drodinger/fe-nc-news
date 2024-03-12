import { useState, useEffect } from 'react';
import axios from 'axios';

export default function IndividualArticle(articleID) {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://channel-5-news.onrender.com/api/articles/${articleID.articleID}`)
            .then((res) => {
                setArticle(res.data.article);
                setIsLoading(false);
            })
    }, [])

    if (isLoading) {
        return <p>Loading...</p>
    } else {
        return (
            <>
            <h1>{article.title}</h1>
            <div>
                <p>{new Date(article.created_at).toUTCString()}</p>
                <p>Author: {article.author}</p>
                <p>{article.votes} votes</p>
                <p>Topic: {article.topic}</p>
            </div>
            <img src={article.article_img_url} />
            <p>{article.body}</p>
            </>
        )
    }
}
