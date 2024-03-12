import { useState, useEffect } from 'react';
import axios from 'axios';

export default function IndividualArticleComments(articleID) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        axios.get(`https://channel-5-news.onrender.com/api/articles/${articleID.articleID}/comments`)
            .then((res) => {
                setComments(res.data.comments);
                setIsLoading(false);
            })
    }, [])

    
    if (isLoading) {
        return (
            <>
                <h3>Comments</h3>
                <p>Loading...</p>
            </>
        )
    } else {
        return (
            <>
                <h3>Comments</h3>
                <p>{comments.length} comments</p>
                {
                    comments.map((comment) => 
                        <div className="individual-comment" key={comment.comment_id}>
                            <div className="comment-details">
                                <p>{comment.author}</p>
                                <p>{new Date(comment.created_at).toUTCString()}</p>
                                <p>{comment.votes}</p>
                            </div>
                            <p>{comment.body}</p>
                        </div>
                    )
                }
            </>
        )
    }
}
