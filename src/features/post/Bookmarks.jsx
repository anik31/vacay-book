import { DisplayPost } from "./components/DisplayPost";
import { useSelector } from "react-redux";
import { Center, Spinner } from '@chakra-ui/react';

export function Bookmarks(){
    const {bookmarks, isLoading} = useSelector(store=>store.bookmark);
    const {posts} = useSelector(store=>store.post);
    const bookmarkPosts = posts.filter(({_id})=>bookmarks.includes(_id));

    return (
        <>
        {isLoading 
        ? <Center my={5}>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='cyan.500'
                size='xl'
            />
        </Center>
        
        : bookmarkPosts.map(post=><DisplayPost key={post._id} post={post} />)}
        </>
    );
}