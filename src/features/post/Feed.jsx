import { DisplayPost } from "./components/DisplayPost";
import { useSelector } from "react-redux";
import { 
    Center, 
    Spinner, 
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button, 
    Box,
    Text
} from '@chakra-ui/react';
import { UpDownIcon } from '@chakra-ui/icons'
import { useState } from "react";
import { getFilteredPosts } from "utils";

export function Feed(){
    const {user} = useSelector(store=>store.auth);
    const {allUsers} = useSelector(store=>store.user);
    const {posts, isLoading} = useSelector(store=>store.post);
    const currentUser = allUsers.find(({_id})=>_id===user._id);
    const [filter, setFilter] = useState("");

    let feedPosts = posts.filter(({username})=>username===currentUser.username 
    || currentUser.following.some(followingUser=>followingUser.username===username));

    if(filter){
        feedPosts = getFilteredPosts(filter, feedPosts);
    }

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
        : <>
        <Box>
        <Menu>
          <MenuButton
            as={Button}
            aria-label='Options'
            rightIcon={<UpDownIcon  />}
            variant='outline'
          >Filter by</MenuButton>
          <MenuList>
            <MenuItem onClick={()=>setFilter("oldest")}>Oldest</MenuItem>
            <MenuItem onClick={()=>setFilter("latestt")}>Latest</MenuItem>
            <MenuItem onClick={()=>setFilter("trending")}>Trending</MenuItem>
          </MenuList>
        </Menu>
        </Box>
        {feedPosts.length>0
        ?   feedPosts.map(post=><DisplayPost key={post._id} post={post} />)
        :   <Text align="center" fontSize="1.5rem" mt={3} mb={2}>No Posts Found</Text>
        }
        </>
        }
        </>
    );
}