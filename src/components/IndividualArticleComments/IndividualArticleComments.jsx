import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import IndividualArticleNewComment from '../IndividualArticleNewComment/IndividualArticleNewComment.jsx';
import CommentDeleteButton from '../CommentDeleteButton/CommentDeleteButton.jsx';
import { UserContext } from '../../contexts/User.jsx';

export default function IndividualArticleComments(props) {
    const { articleID, waitForAsync, setWaitForAsync } = props;
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [newComment, setNewComment] = useState(false);
    const { user } = useContext(UserContext);
    let componentJustLoaded = true;

    useEffect(() => {
        if (componentJustLoaded || newComment) {
            if (waitForAsync) {
                return;
            }
            if (!componentJustLoaded) {
                setWaitForAsync(true);
            }
            axios.get(`https://channel-5-news.onrender.com/api/articles/${articleID}/comments`)
                .then((res) => {
                    setWaitForAsync(false);
                    setComments(res.data.comments);
                    setIsLoading(false);
                    componentJustLoaded = false;
                    if (newComment) {
                        setNewComment(false);
                    }
                })
                .catch((err) => {
                    setWaitForAsync(false);
                    console.log(err);
                });
        }
    }, [newComment])

    
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
                <div className="individual-article-comments-section" >
                <h3>Comments</h3>
                <p>{comments.length} comments</p>
                <IndividualArticleNewComment articleID={articleID} setNewComment={setNewComment} waitForAsync={waitForAsync} setWaitForAsync={setWaitForAsync} />
                {
                    comments.map((comment) => {
                            if (comment.author === user) {
                                return (
                                    <div className="user-list-item-container" key={comment.comment_id} comment-id={comment.comment_id}>
                                        <div className="comment-details">
                                            <p>{comment.author}</p>
                                            <p>{new Date(comment.created_at).toUTCString()}</p>
                                            <p>{comment.votes}</p>
                                        </div>
                                        <p>{comment.body}</p>
                                        <CommentDeleteButton setNewComment={setNewComment} waitForAsync={waitForAsync} setWaitForAsync={setWaitForAsync} />
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="list-item-container" key={comment.comment_id}>
                                        <div className="comment-details">
                                            <p>{comment.author}</p>
                                            <p>{new Date(comment.created_at).toUTCString()}</p>
                                            <p>{comment.votes}</p>
                                        </div>
                                        <p>{comment.body}</p>
                                    </div>
                                )
                            }
                        }
                    )
                }
                </div>
            </>
        )
    }
}
