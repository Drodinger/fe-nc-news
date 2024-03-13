import { Routes, Route } from 'react-router-dom';
import './App.css';
import Articles from './components/Articles.jsx';
import IndividualArticleContainer from './components/IndividualArticleContainer.jsx';
import LandingPage from './components/LandingPage.jsx';

function App() {
    return (
        <>
            <h1>NC News</h1>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:article_id" element={<IndividualArticleContainer />}/>
            </Routes>
        </>
    )
}

export default App
