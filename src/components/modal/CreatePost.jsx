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
    Button
} from '@chakra-ui/react';
import { useRef, useState } from "react";

export function CreatePost({isOpen, onClose}){
    const initialRef = useRef();
    const [postInput, setPostInput] = useState("");

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
                <Button bgColor='cyan.400' color="white" mr={3} onClick={onClose} >
                Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    );
};