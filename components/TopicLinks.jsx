import axios from 'axios';
import { useState, useEffect } from 'react';


export default function TopicLinks() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        axios.get("https://channel-5-news.onrender.com/api/topics")
            .then((res) => {
                setTopics(res.data.topics.map((topic) => topic.slug));
            })
    }, []);


    if (!topics) {
        return (
            <p>Loading...</p>
        )
    } else {
        return (
                <div className="topic-links">
                    <a href={"/articles"} key="all">all</a>
                    {
                        topics.map((topic) => {
                            return <a href={`/articles?topic=${topic}`} key={topic}>{topic}</a>
                        })
                    }
                </div>
        )
    }
}
