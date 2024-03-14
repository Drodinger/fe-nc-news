import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TopicLinks() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        axios.get("https://channel-5-news.onrender.com/api/topics")
            .then((res) => {
                setTopics(res.data.topics.map((topic) => topic.slug));
            })
            .catch((err) => err)
    }, []);


    if (!topics) {
        return (
            <p>Loading...</p>
        )
    } else {
        return (
                <div className="topics-list">
                    <Link to={""} className="topic-link" relative="path" key="all"><button>all</button></Link>
                    {
                        topics.map((topic) => {
                            return <Link to={`?topic=${topic}`} className="topic-link" relative="path" key={topic}><button>{topic}</button></Link>
                        })
                    }
                </div>
        )
    }
}
