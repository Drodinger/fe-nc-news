import { useState, useEffect } from 'react';
import axios from 'axios';


export default function ArticlesList(topic) {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(topic.topic ? `https://channel-5-news.onrender.com/api/articles?topic=${topic.topic}` : "https://channel-5-news.onrender.com/api/articles")
            .then((res) => {
                setArticles(res.data.articles);
                setIsLoading(false);
            })
    }, [])

    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    } 
        return (
            <>
                <ul>
                    {
                        articles.map((article) => 
                                <li className="articles-list-item" key={article.article_id}>
                                <h2>{article.title}</h2>
                                <div className="articles-list-item-details">
                                    <p>{new Date(article.created_at).toUTCString()}</p>
                                    <p>Author: {article.author}</p>
                                    <p>{article.votes} votes</p>
                                    <p>{article.comment_count} comments</p>
                                </div>
                                </li>
                        )
                    }
                </ul>
            </>
        )
}
