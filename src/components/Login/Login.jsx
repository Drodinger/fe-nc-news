import { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/User.jsx';

export default function Login() {
    const [ users, setUsers ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const loginErr = useRef(null);
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        axios.get('https://channel-5-news.onrender.com/api/users')
            .then((res) => {
                const usersArr = res.data.users.map((user) => user.username);
                setUsers(usersArr);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const showError = () => {
        loginErr.current.setAttribute("class", "error");
        setTimeout(() => {
            if (loginErr.current) {
                loginErr.current.setAttribute("class", "error-hidden");
            }
        }, 7000)
    }

    const handleUsersSubmit = (e) => {
        e.preventDefault();
        const inputUser = e.target[0].value;
        if (users.includes(inputUser)) {
            setUser(inputUser);
        } else {
            showError();
        }
    }

    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    } else {
        return (
            <>
                <h2>Log in</h2>
                <div className="error-hidden" ref={loginErr}>
                    <p>Error: User does not exist</p>
                </div>
                <form onSubmit={handleUsersSubmit} >
                    <label>User name:</label>
                    <input type="text" maxLength="35" ></input>
                    <input type="submit" value="Login"/>
                </form>
            </>
        )
    }
}
