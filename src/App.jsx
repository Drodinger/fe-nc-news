import { Routes, Route } from 'react-router-dom';
import './App.css';
import Articles from '../components/Articles.jsx'

function App() {
    return (
        <>
            <h1>Channel 5 news</h1>
            <Routes>
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles?topic=" element={<Articles />} />
            </Routes>
        </>
    )
}

export default App
