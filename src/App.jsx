import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Articles from './components/Articles.jsx';
import IndividualArticleContainer from './components/IndividualArticleContainer.jsx';
import LandingPage from './components/LandingPage.jsx';
import NCLogo from './assets/NCLogoTransparent.png';

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
            </div>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:article_id" element={<IndividualArticleContainer />}/>
            </Routes>
        </>
    )
}

export default App
