export default function sortArticles(category, articles) {
    const articlesCopy = [...articles];
    switch(category) {
        case "date - asc":
            console.log("date - asc");
            articlesCopy.sort((article1, article2) => new Date(article1.created_at) - new Date(article2.created_at));
            break;
        case "comment count - asc":
            console.log("comment count - asc");
            articlesCopy.sort((article1, article2) => article1.comment_count - article2.comment_count);
            break;
        case "votes - asc":
            console.log("votes - asc");
            articlesCopy.sort((article1, article2) => article1.votes - article2.votes);
            break;
        case "date - desc":
            console.log("date - desc");
            articlesCopy.sort((article1, article2) => new Date(article2.created_at) - new Date(article1.created_at));
            break;
        case "comment count - desc":
            articlesCopy.sort((article1, article2) => article2.comment_count - article1.comment_count);
            break;
        case "votes - desc":
            console.log("votes - desc");
            articlesCopy.sort((article1, article2) => article2.votes - article1.votes);
            break;
        default:
            break;
    }
    return articlesCopy;        
}
