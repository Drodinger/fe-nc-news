import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function IndividualArticleVotes(props) {
    const { articleID, initialVotes } = props;
    const voteErr = useRef(null);
    const [userVote, setUserVote] = useState(0);
    const [prevUserVote, setPrevUserVote] = useState(0);
    const [votes, setVotes] = useState(initialVotes);

    function showVoteError() {
        voteErr.current.setAttribute("class", "error");
        setTimeout(() => {
            voteErr.current.setAttribute('class', 'error-hidden');
        }, 7000)
    }

    function handleUserVote(e) {
        if (e.target.innerText === "+") {
            if (userVote === 1) {
                setUserVote(0);
            } else {
                setUserVote(1);
            }
        } else if (e.target.innerText === "-") {
            if (userVote === -1) {
                setUserVote(0);
            } else {
                setUserVote(-1);
            }
        }
    }

    useEffect(() => {
        const prevState = prevUserVote;
        const state = userVote;
        const voteDelta = state - prevState;
        if (voteDelta) {
            setVotes((currentVotes) => currentVotes + voteDelta);
            axios.patch(`https://channel-5-news.onrender.com/api/articles/${articleID}`, { inc_votes: voteDelta})
                .then((res) => {
                    setPrevUserVote(state);
                })
                .catch((err) => {
                    setVotes((currentVotes) => currentVotes - voteDelta);
                    setUserVote(prevState);
                    showVoteError();
                });
        }
    }, [userVote]);

    return (
        <>
            <div>
            <p onClick={handleUserVote}>+</p>
            <p>{votes} votes</p>
            <p onClick={handleUserVote}>-</p>
            <div className="error-hidden" ref={voteErr}>
                <p>Error: Vote not counted</p>
            </div>
            </div>
        </>
    )
}
