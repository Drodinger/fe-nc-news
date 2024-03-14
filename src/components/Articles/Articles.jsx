import { useSearchParams } from 'react-router-dom';
import ArticlesList from '../ArticlesList/ArticlesList.jsx';
import TopicLinks from '../TopicLinks/TopicLinks.jsx';


export default function Articles() {
    const [searchParams, setSearchParams] = useSearchParams();

        return (
            <>
                <h2>{searchParams.get("topic")} articles</h2>
                <TopicLinks />
                <ArticlesList topic={searchParams.get("topic")}/>
            </>
        )
}
