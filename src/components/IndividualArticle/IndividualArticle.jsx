import { useState, useEffect } from 'react';
import axios from 'axios';
import IndividualArticleVotes from '../IndividualArticleVotes/IndividualArticleVotes.jsx';

export default function IndividualArticle(props) {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { articleID } = props;
    const { votes } = article;

    useEffect(() => {
        axios.get(`https://channel-5-news.onrender.com/api/articles/${articleID}`)
            .then((res) => {
                setArticle(res.data.article);
                setIsLoading(false);
            })
            .catch((err) => err)
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
                <p>Topic: {article.topic}</p>
                <IndividualArticleVotes articleID = { articleID } initialVotes={ votes }/>
            </div>
            <img src={article.article_img_url} />
            <p>{article.body}</p>
            </>
        )
    }
}
