import { Box, Text, Button, Stack, Divider, Avatar } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { followUser, unfollowUser } from "../userSlice";

export function Follow(){
    const {allUsers} = useSelector(store=>store.user);
    const {user} = useSelector(store=>store.auth);
    const dispatch = useDispatch();

    return (
        <Box>
            <Stack direction="column" spacing={3} 
            pos="sticky" top="5rem">
                <Text fontWeight="semibold" fontSize="1.3rem">People to follow</Text>
                <Divider />
                <Stack spacing={4} direction="column" align="center">
                {allUsers.filter(({_id})=>user._id!==_id).map(({_id, username, firstName, lastName, followers, profilePic})=>
                    <Stack color="gray.600" direction="row" align="center" spacing={2} key={_id}>
                        <Link to={`/profile/${username}`}>
                        <Stack spacing={2} direction="row" align="center">
                            <Avatar size="sm" name={`${firstName} ${lastName}`} 
                            src={profilePic} />
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>{`${firstName} ${lastName}`}</Text>
                                <Text color={'gray.500'}>@{username}</Text>
                            </Stack>
                        </Stack>
                        </Link>
                        {followers.some(({_id})=>_id===user._id)
                        ?  <Button maxH={8} variant="outline" borderRadius="3xl" 
                            onClick={()=>dispatch(unfollowUser(_id))}>Unfollow</Button>
                        :  <Button maxH={8} variant="outline" borderRadius="3xl" 
                            onClick={()=>dispatch(followUser(_id))}>Follow</Button>
                        }
                    </Stack>
                )}
                </Stack>
            </Stack>
        </Box>
    );
}