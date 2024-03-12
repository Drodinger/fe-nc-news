import { useState } from 'react';
import articles from './Articles.jsx';


export default function ArticlesList(articles) {
    const [isLoading, setIsLoading] = useState(true);
    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    } else {
        return (
            <>
                {
                    articles.map((article) => {
                            <li className="articles-list-item">
                            <h2>article.title</h2>
                            <div className="articles-list-item .details">
                            <p>{article.created_at}</p>
                            <p>Author: {article.author}</p>
                            <p>{article.votes} votes</p>
                            <p>{article.comment_count} comments</p>
                            </div>
                            </li>
                    })
                }
            </>
        )
    }
}
