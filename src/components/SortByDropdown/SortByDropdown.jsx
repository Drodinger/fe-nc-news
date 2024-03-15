import sortArticles from '../../utils/sortArticles/sortArticles.js';
import { useEffect } from 'react';

export default function SortByDropdown(props) {
    const { topic, articles, setArticles, sortCategories } = props;

    const handleSortClick = (e) => {
        console.log(document.getElementById("sort-by-dropdown-select").value)
        setArticles(sortArticles(e.target.value, articles));
    }

    useEffect(() => {
        document.getElementById("sort-by-dropdown-select").value = "date - desc";
        
    }, [topic])
    
    return (
        <select id="sort-by-dropdown-select" >
            {
                sortCategories.map((category) => <option  onClick={handleSortClick} value={category} key={category}>{category}</option>)
            }
        </select>
    )
}
