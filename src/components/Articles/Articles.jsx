import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import ArticlesList from '../ArticlesList/ArticlesList.jsx';
import TopicLinks from '../TopicLinks/TopicLinks.jsx';
import SortByDropdown from '../SortByDropdown/SortByDropdown.jsx';


export default function Articles() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [articles, setArticles] = useState([]);
    const [sortedBy, setSortedBy] = useState("date");
    const [sortCategories, setSortCategories] = useState([
        "date - asc",
        "date - desc",
        "comment count - asc",
        "comment count - desc",
        "votes - asc",
        "votes - desc"
    ]);

        return (
            <>
                <h2>{searchParams.get("topic")} articles</h2>
                <TopicLinks />
                <SortByDropdown articles={articles} setArticles={setArticles} sortedBy={sortedBy} setSortedBy={setSortedBy} sortCategories={sortCategories}/>
                <ArticlesList topic={searchParams.get("topic")} articles={articles} setArticles={setArticles}/>
            </>
        )
}
