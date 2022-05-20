import { DisplayPost } from "./components/DisplayPost";
import { useSelector } from "react-redux";
import { Center, Spinner } from '@chakra-ui/react';

export function Feed(){
    const {user} = useSelector(store=>store.auth);
    const {allUsers} = useSelector(store=>store.user);
    const {posts, isLoading} = useSelector(store=>store.post);
    const currentUser = allUsers.find(({_id})=>_id===user._id);
    const feedPosts = posts.filter(({username})=>username===currentUser.username 
    || currentUser.following.some(followingUser=>followingUser.username===username));

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
        
        : feedPosts.map(post=><DisplayPost key={post._id} post={post} />)}
        </>
    );
}