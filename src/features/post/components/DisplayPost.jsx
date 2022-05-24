import {
    Box,
    Center,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    useToast,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure
} from '@chakra-ui/react';
import {MdBookmarkBorder, MdBookmark, MdFavoriteBorder, MdFavorite} from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Comment } from './Comment';
import { likePost, disLikePost, commentOnPost, deletePost } from '../postSlice';
import { useState } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { CreatePost } from './CreatePost';
import { addPostInBookmarks, removePostFromBookmarks } from '../bookmarkSlice';
import { Link } from 'react-router-dom';
import { getCustomDate } from 'utils';

export function DisplayPost({post}){
  const {_id, comments, content, createdAt, likes: {likeCount, likedBy}, username} = post;
    const {allUsers} = useSelector(store=>store.user);
    const {user} = useSelector(store=>store.auth);
    const {bookmarks} = useSelector(store=>store.bookmark);
    const {firstName, lastName, profilePic} = allUsers.find(user=>user.username===username);
    const fullName = `${firstName} ${lastName}`;
    const dispatch = useDispatch();
    const [commentInput, setCommentInput] = useState("");
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isEdit, setIsEdit] = useState(false);

    const displayDate = getCustomDate(createdAt);

    const commentHandler = () => {
      if(commentInput){
        dispatch(commentOnPost({postId: _id, commentData: {text: commentInput}}));
        setCommentInput("");
      }else{
        toast({
          title: "Comment text is empty",
          status: "warning",
          position: "top-right",
          isClosable: true,
          duration: 3000
        })
      }};
    
    const editHandler = () => {
      setIsEdit(true);
      onOpen();
    }

    return (
      <>
    <Center py={5}>
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        border='1px' borderColor='gray.200'
        rounded={'md'}
        px={5}
        py={4}
        overflow={'hidden'}
        boxShadow={'md'}
        >
        <HStack justify="space-between">
        <Link to={`/profile/${username}`}>
        <Stack direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={profilePic}
            alt={fullName}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{fullName}</Text>
            <Text color={'gray.500'}>{displayDate}</Text>
          </Stack>
        </Stack>
        </Link>
        {user.username===username && 
        <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
            <MenuItem onClick={editHandler}>Edit</MenuItem>
            <MenuItem onClick={()=>dispatch(deletePost(_id))}>Delete</MenuItem>
          </MenuList>
        </Menu>
        </Box>
        }
        </HStack>
        <Stack my={2}>
            <Text>{content}</Text>
        </Stack>

        <Stack direction={'row'} spacing={4} align={'center'}>
            <Stack direction={'row'} spacing={1} align={'center'}>
                {likedBy.some(likedByUser=>likedByUser.username===user.username)
                ? <IconButton
                    icon={<MdFavorite/>}
                    variant="ghost"
                    fontSize="1.5rem"
                    onClick={()=>dispatch(disLikePost(_id))}
                  />
                : <IconButton
                    icon={<MdFavoriteBorder/>}
                    variant="ghost"
                    fontSize="1.5rem"
                    onClick={()=>dispatch(likePost(_id))}
                  />
                }
                <span>{likeCount} Likes</span>
            </Stack>

            {bookmarks.some(id=>id===_id)
             ? <IconButton
                icon={<MdBookmark/>}
                variant="ghost"
                fontSize="1.5rem"
                onClick={()=>dispatch(removePostFromBookmarks(_id))}
              />
             : <IconButton
                icon={<MdBookmarkBorder/>}
                variant="ghost"
                fontSize="1.5rem"
                onClick={()=>dispatch(addPostInBookmarks(_id))}
            />}
        </Stack>

        <Stack direction={'row'} spacing={4} align={'center'} my={2}>
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    placeholder='Enter Comment'
                    value={commentInput}
                    onChange={({target})=>setCommentInput(target.value)}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={commentHandler}>Post</Button>
                </InputRightElement>
            </InputGroup>
        </Stack>

        {comments && comments.map(comment=><Comment key={comment._id} comment={comment} />)}
        
      </Box>
    </Center>
    {isEdit && <CreatePost isOpen={isOpen} onClose={onClose} editPostData={post} setIsEdit={setIsEdit} />}
    </>
  );
}