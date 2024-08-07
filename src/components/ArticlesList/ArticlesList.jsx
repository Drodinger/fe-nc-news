import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ArticlesList(props) {
    const [isLoading, setIsLoading] = useState(true);
    const { topic, articles, setArticles } = props;

    useEffect(() => {
        axios.get(topic ? `https://channel-5-news.onrender.com/api/articles?topic=${topic}` : "https://channel-5-news.onrender.com/api/articles")
            .then((res) => {
                setArticles(res.data.articles);
                setIsLoading(false);
            })
            .catch((err) => err);
    }, [topic])

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
                                <div className="list-item-container" key={article.article_id}>
                                    <h2>{article.title}</h2>
                                    <div className="articles-list-item-details">
                                        <p>{new Date(article.created_at).toUTCString()}</p>
                                        <p>Author: {article.author}</p>
                                        <p>{article.votes} votes</p>
                                        <p>{article.comment_count} comments</p>
                                    </div>
                                    <Link to={`/articles/${article.article_id}`} relative="path">
                                        <button >View article</button>
                                    </Link>
                                </div>
                        )
                    }
                </ul>
            </>
        )
}
