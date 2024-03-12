import { useSearchParams } from 'react-router-dom';
import ArticlesList from './ArticlesList.jsx';
import TopicLinks from './TopicLinks.jsx';


export default function Articles() {
    const [searchParams, setSearchParams] = useSearchParams();

        return (
            <>
                <h1>{searchParams.get("topic")} articles</h1>
                <TopicLinks />
                <ArticlesList topic={searchParams.get("topic")}/>
            </>
        )
}
