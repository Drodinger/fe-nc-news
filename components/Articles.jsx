import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ArticlesList from './ArticlesList.jsx';


export default function Articles() {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <ArticlesList topic={searchParams.get("topic")}/>
    )
}
