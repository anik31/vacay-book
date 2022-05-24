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
    Box
} from '@chakra-ui/react';
import { UpDownIcon } from '@chakra-ui/icons'
import { useState } from "react";

export function Feed(){
    const {user} = useSelector(store=>store.auth);
    const {allUsers} = useSelector(store=>store.user);
    const {posts, isLoading} = useSelector(store=>store.post);
    const currentUser = allUsers.find(({_id})=>_id===user._id);
    const [filter, setFilter] = useState("");

    let feedPosts = posts.filter(({username})=>username===currentUser.username 
    || currentUser.following.some(followingUser=>followingUser.username===username));

    if(filter){
        switch(filter){
            case "trending":
                feedPosts = [...feedPosts]
                .filter(post=>post.likes.likeCount>0)
                .sort((a,b)=>b.likes.likeCount - a.likes.likeCount);
                break;
            case "oldest":
                feedPosts = [...feedPosts].sort((a,b)=>new Date(a.createdAt) - new Date(b.createdAt));
                break;
            default:
                feedPosts = [...feedPosts];
                break;
        }
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
        {feedPosts.map(post=><DisplayPost key={post._id} post={post} />)}
        </>
        }
        </>
    );
}