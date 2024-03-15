import { useState, useEffect, useRef, useContext } from 'react';
import { UserContext } from '../../contexts/User.jsx';
import axios from 'axios';

export default function IndividualArticleNewComment(props) {
    const { articleID, setNewComment } = props;
    const [isVisible, setIsVisible] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [isCommentPostErr, setIsCommentPostErr] = useState(false);
    const [isCommentPostSuccess, setIsCommentPostSuccess] = useState(false);
    const { user } = useContext(UserContext);
    const commentPostErr = useRef(null);
    const commentPostSuccess = useRef(null);
    const formValidationErr = useRef(null);

    function handleClickAddComment() {
        setIsVisible(true);
    }

    function displayFormValidationErr() {
        if (formValidationErr.current) {
            formValidationErr.current.setAttribute('class', 'error');
            setTimeout(() => {
                formValidationErr.current.setAttribute('class', 'error-hidden');
            }, 7000)
        }
    }

    useEffect(() => {
        if (isCommentPostErr) {
            setIsCommentPostErr(false);
            commentPostErr.current.setAttribute('class', 'error');
            setTimeout(() => {
                commentPostErr.current.setAttribute('class', 'error-hidden');
            }, 7000)
        } else if (isCommentPostSuccess) {
            setIsCommentPostSuccess(false);
            commentPostSuccess.current.setAttribute('class', 'success');
            setTimeout(() => {
                commentPostSuccess.current.setAttribute('class', 'success-hidden');
            }, 7000)
        }
    }, [isVisible, isSending])

    function handleFormSubmit(e) {
        e.preventDefault();
        if (e.target[0].value === "") {
            displayFormValidationErr();
            return;
        }
        setIsSending(true);
        axios.post(`https://channel-5-news.onrender.com/api/articles/${articleID}/comments`, { 
            body: e.target[0].value,
            user: user,
        })
            .then((res) => {
                setIsSending(false);
                setIsVisible(false);
                setNewComment(true);
                setIsCommentPostSuccess(true);
            })
            .catch((err) => {
                console.log(err)
                setIsVisible(false);
                setIsSending(false);
                setIsCommentPostErr(true);
            });
    }

    if (!user) {
        return (
            <>
            </>
        );
    }
    else if (!isVisible && !isSending) {
        return (
            <>
                <button onClick={handleClickAddComment} >Add comment</button>
                <div className="error-hidden" id="commentPostErr" ref={commentPostErr}>
                    <p>Error: Comment failed to send</p>
                </div>
                <div className="error-hidden" id="formValidationErr" ref={formValidationErr}>
                    <p>Error: Write a comment</p>
                </div>
                <div className="success-hidden" id="commentPostSuccess" ref={commentPostSuccess}>
                    <p>Comment posted!</p>
                </div>
            </>
        )
    } else if (isVisible && !isSending) {
        return (
            <>
                <p>Comment form</p>
                <form onSubmit={handleFormSubmit} >
                    <input type="text" maxLength="256" id="new-comment-body"></input>
                    <input type="submit" value="Post comment" />
                </form>
            </>
        );
    } else if (isVisible && isSending) {
        return (
            <p>Sending</p>
        );
    } else {
        return (
            <p>Invisible and sending</p>
        );
    }
}
