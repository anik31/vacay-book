import { DisplayPost } from "./components/DisplayPost";
import { useSelector } from "react-redux";
import { Center, Spinner } from '@chakra-ui/react';

export function Explore(){
    const {posts, isLoading} = useSelector(store=>store.post);

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
        
        : posts.map(post=><DisplayPost key={post._id} post={post} />)}
        </>
    );
}