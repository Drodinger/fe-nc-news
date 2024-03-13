import { Routes, Route } from 'react-router-dom';
import './App.css';
import Articles from '../components/Articles.jsx';
import IndividualArticleContainer from '../components/IndividualArticleContainer.jsx';

function App() {
    return (
        <>
            <h1>NC News</h1>
            <Routes>
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles?topic=" element={<Articles />} />
                <Route path="/articles/:article_id" element={<IndividualArticleContainer />}/>
            </Routes>
        </>
    )
}

export default App
