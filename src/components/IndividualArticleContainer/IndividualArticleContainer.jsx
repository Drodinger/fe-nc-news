import { useParams } from 'react-router-dom';
import IndividualArticle from '../IndividualArticle/IndividualArticle.jsx';
import IndividualArticleComments from '../IndividualArticleComments/IndividualArticleComments.jsx';

export default function IndividualArticleContainer() {
    const { article_id } = useParams();     

    return (
        <>
            <IndividualArticle articleID={article_id} />
            <IndividualArticleComments articleID={article_id} />
        </>
    )
}
