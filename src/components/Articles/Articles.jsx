import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import ArticlesList from '../ArticlesList/ArticlesList.jsx';
import TopicLinks from '../TopicLinks/TopicLinks.jsx';
import SortByDropdown from '../SortByDropdown/SortByDropdown.jsx';


export default function Articles() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [articles, setArticles] = useState([]);
    const [sortCategories, setSortCategories] = useState([
        "date - desc",
        "date - asc",
        "comment count - desc",
        "comment count - asc",
        "votes - desc",
        "votes - asc"
    ]);

        return (
            <>
                <h2>{searchParams.get("topic")}Articles</h2>
                <TopicLinks />
                <SortByDropdown topic={searchParams.get("topic")} articles={articles} setArticles={setArticles} sortCategories={sortCategories}/>
                <ArticlesList topic={searchParams.get("topic")} articles={articles} setArticles={setArticles}/>
            </>
        )
}
