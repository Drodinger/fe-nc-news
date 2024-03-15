import axios from 'axios';


export default function CommentDeleteButton(props) {
    const { setNewComment, waitForAsync, setWaitForAsync } = props;

    const handleDeleteClick = (e) => {
        if (waitForAsync) {
            return;
        }
        setWaitForAsync(true);
        const commentID = e.target.parentElement.attributes[1].nodeValue;
        axios.delete(`https://channel-5-news.onrender.com/api/comments/${commentID}`)
            .then(() => {
                setNewComment(true);
                setWaitForAsync(false);
            })
            .catch((err) => {
                setWaitForAsync(false);
                console.log(err)
            });
    }

    return (
        <button onClick={handleDeleteClick} >Delete</button>
    )
    
}
