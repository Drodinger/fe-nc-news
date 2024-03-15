import sortArticles from '../../utils/sortArticles/sortArticles.js';
export default function SortByDropdown(props) {
    const { sortedBy, setSortedBy, articles, setArticles, sortCategories } = props;

    const handleSortClick = (e) => {
        console.log(sortArticles(e.target.value, articles));
    }
    
    return (
        <select>
            {
                sortCategories.map((category) => <option  onClick={handleSortClick} value={category} key={category}>{category}</option>)
            }
        </select>
    )
}
