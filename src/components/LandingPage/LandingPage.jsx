import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <>
            <h2>Welcome to NC News</h2>
            <Link to='/articles' relative='path' >
                <button>View articles</button>
            </Link>
        </>
    )
}
