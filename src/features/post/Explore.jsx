import { DisplayPost } from "./components/DisplayPost";
import { useSelector } from "react-redux";
import { Center, Spinner, Text } from '@chakra-ui/react';

export function Explore(){
    const {posts, isLoading} = useSelector(store=>store.post);

    return (
        <>
        {isLoading 
        ? <Center my="10rem">
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='cyan.500'
                size='xl'
            />
        </Center>
        
        :
        <> 
        {posts.length>0
        ?   posts.map(post=><DisplayPost key={post._id} post={post} />)
        :   <Text align="center" fontSize="1.5rem" mt={3} mb={2}>No Posts Found</Text>
        }
        </>
        }
        </>
    );
}