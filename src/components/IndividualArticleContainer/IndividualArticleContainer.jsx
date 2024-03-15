import { useParams } from 'react-router-dom';
import { useState } from 'react';
import IndividualArticle from '../IndividualArticle/IndividualArticle.jsx';
import IndividualArticleComments from '../IndividualArticleComments/IndividualArticleComments.jsx';

export default function IndividualArticleContainer() {
    const [waitForAsync, setWaitForAsync] = useState(false);
    const { article_id } = useParams();     

    return (
        <>
            <IndividualArticle articleID={article_id} waitForAsync={waitForAsync} setWaitForAsync={setWaitForAsync}/>
            <IndividualArticleComments articleID={article_id} waitForAsync={waitForAsync} setWaitForAsync={setWaitForAsync} />
        </>
    )
}
