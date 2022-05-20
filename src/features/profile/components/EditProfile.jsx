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
    Input, 
    Button,
    Textarea
} from '@chakra-ui/react';
import { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { editUserInfo } from '../userSlice';

export function EditProfile({isOpen, onClose}){
    const initialRef = useRef();
    const [linkInput, setLinkInput] = useState("");
    const [bioInput, setBioInput] = useState("");
    const dispatch = useDispatch();
    
    const editProfileHandler = () => {
        dispatch(editUserInfo({link: linkInput, bio: bioInput}));
        onClose();
    }

    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
            <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropBlur='2px'
            />
            <ModalContent>
            <ModalHeader>Edit Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <FormControl>
                    <FormLabel>Portfolio URL</FormLabel>
                    <Input ref={initialRef} placeholder='Enter text' value={linkInput}
                    focusBorderColor="cyan.400" onChange={({target})=>setLinkInput(target.value)} />

                    <FormLabel>Bio</FormLabel>
                    <Textarea placeholder='Enter text' value={bioInput}
                    focusBorderColor="cyan.400" onChange={({target})=>setBioInput(target.value)} />
                </FormControl>
            </ModalBody>
            <ModalFooter>
                <Button mr={3} bgColor="cyan.400" color="white" onClick={editProfileHandler}>
                Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    );
}