import { DisplayProfile } from "./components/DisplayProfile";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DisplayPost } from "features";
import { Center, Spinner, Text } from '@chakra-ui/react';

export function Profile(){
    const {allUsers} = useSelector(store=>store.user);
    const {posts, isLoading} = useSelector(store=>store.post);
    const params = useParams();
    const profileUsername = params.username;
    const user = allUsers.find(({username})=>username===profileUsername);
    const userPosts = posts.filter(({username})=>username===profileUsername);
    const postLength = userPosts.length;
    
    return (
        <>
        <DisplayProfile value={{...user,posts: postLength}} />
        {isLoading 
        ? <Center mt="10rem">
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='cyan.500'
                size='xl'
            />
        </Center>
        : <>
        {userPosts.length>0
        ?   userPosts.map(post=><DisplayPost key={post._id} post={post} />)
        :   <Text align="center" fontSize="1.5rem" mt={6} mb={2}>No Posts Found</Text>
        }
        </>
        }
        </>
    );
}