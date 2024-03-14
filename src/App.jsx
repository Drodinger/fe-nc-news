import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Articles from './components/Articles/Articles.jsx';
import IndividualArticleContainer from './components/IndividualArticleContainer/IndividualArticleContainer.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import NCLogo from './assets/NCLogoTransparent.png';
import Login from './components/Login/Login.jsx';
import LoginButton from './components/LoginButton/LoginButton.jsx';

function App() {
    return (
        <>
            <div className="nav-bar">
                <Link to='/' relative='path' >
                    <img src={NCLogo} alt="North Coders logo" className="nav-logo" />
                </Link>
                <Link to='/' relative='path' >
                    <h1>NC News</h1>
                </Link>
                <LoginButton />
            </div>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:article_id" element={<IndividualArticleContainer />}/>
            </Routes>
        </>
    )
}

export default App
