export function getFilteredPosts(filter, feedPosts){
    switch(filter){
        case "trending":
            return [...feedPosts]
            .filter(post=>post.likes.likeCount>0)
            .sort((a,b)=>b.likes.likeCount - a.likes.likeCount);
        case "oldest":
            return [...feedPosts].sort((a,b)=>new Date(a.createdAt) - new Date(b.createdAt));
        default:
            return [...feedPosts];
    }
}