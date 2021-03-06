import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Textarea, 
    Button,
    useToast
} from '@chakra-ui/react';
import { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { throttle } from 'utils';
import { createPost, editPost } from '../postSlice';

export function CreatePost({isOpen, onClose, editPostData, setIsEdit}){
    const initialRef = useRef();
    const [postInput, setPostInput] = useState(editPostData?.content || "");
    const toast = useToast();
    const dispatch = useDispatch();

    const createAPost = () => {
        if(editPostData && postInput.trim()){
            dispatch(editPost({...editPostData, content: postInput.trim()}));
            onClose();
            setIsEdit(false);
            setPostInput("");
        }else if(postInput.trim()){
            dispatch(createPost({content: postInput.trim()}));
            onClose();
            setPostInput("");
        }else{
            toast({
                title: "Post text is empty",
                status: "warning",
                position: "top-right",
                isClosable: true,
                duration: 3000
            })
        }
    };

    const createPostHandler = throttle(createAPost,400);

    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
            <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropBlur='2px'
            />
            <ModalContent>
            <ModalHeader>Create Post</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <FormControl>
                    <FormLabel>Write here</FormLabel>
                    <Textarea ref={initialRef} placeholder='Enter text' value={postInput}
                    focusBorderColor="cyan.400"
                    onChange={({target})=>setPostInput(target.value)} />
                </FormControl>
            </ModalBody>
            <ModalFooter>
                <Button bgColor='cyan.400' color="white" mr={3} onClick={createPostHandler} >
                Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    );
};