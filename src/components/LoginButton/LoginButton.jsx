import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/User.jsx'

export default function LoginButton() {
    const { user, setUser } = useContext(UserContext);

    const handleLogoutClick = () => {
        setUser(null);
    }

    if (!user) {
        return (
            <>
                <Link to='/login' relative='path'>
                    <button>Login</button>
                </Link>
            </>
        )
    } else {
        return (
            <>
                <p>{user}</p>
                <button onClick={handleLogoutClick} >Logout</button>
            </>
        )
    }
}
