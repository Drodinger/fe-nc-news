import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import ArticlesList from './ArticlesList.jsx';


export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [topic, setTopic] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const topic = searchParams.get("topic");
        axios.get(topic ? `https://channel-5-news.onrender.com/api/articles?topic=${topic}` : "https://channel-5-news.onrender.com/api/articles")
            .then((res) => {
                setArticles(res.data.articles);
            })
    }, [])

    return (
        <ArticlesList />
    )
}
