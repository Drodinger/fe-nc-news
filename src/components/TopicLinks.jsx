import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TopicLinks(props) {
    const { setTopic } = props;
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
                <div className="topic-links">
                    <Link to={""} relative="path" key="all">all</Link>
                    {
                        topics.map((topic) => {
                            return <Link to={`?topic=${topic}`} relative="path" key={topic}>{topic}</Link>
                        })
                    }
                </div>
        )
    }
}
