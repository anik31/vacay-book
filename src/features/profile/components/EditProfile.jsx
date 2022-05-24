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
import { getImageUrl } from 'utils';
import { editUserInfo } from '../userSlice';

export function EditProfile({isOpen, onClose}){
    const initialRef = useRef();
    const [profilePicLink, setProfilePicLink] = useState("");
    const [linkInput, setLinkInput] = useState("");
    const [bioInput, setBioInput] = useState("");
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const dispatch = useDispatch();
    
    const imageUpload = async({target}) => {
        setIsUploadingImage(true);
        const [file] = target.files;
        const mediaUrl = await getImageUrl(file);
        setProfilePicLink(mediaUrl);
        setIsUploadingImage(false);
    }

    const editProfileHandler = () => {
        dispatch(editUserInfo({profilePic: profilePicLink, link: linkInput, bio: bioInput}));
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
                    <FormLabel>Profile Picture</FormLabel>
                    <Input placeholder='Enter text' type="file" accept="image/*" 
                    variant="unstyled" p={1} onChange={imageUpload} />

                    <FormLabel>Portfolio URL</FormLabel>
                    <Input ref={initialRef} placeholder='Enter text' value={linkInput}
                    focusBorderColor="cyan.400" onChange={({target})=>setLinkInput(target.value)} />

                    <FormLabel>Bio</FormLabel>
                    <Textarea placeholder='Enter text' value={bioInput}
                    focusBorderColor="cyan.400" onChange={({target})=>setBioInput(target.value)} />
                </FormControl>
            </ModalBody>
            <ModalFooter>
                <Button mr={3} bgColor="cyan.400" color="white" onClick={editProfileHandler} 
                disabled={isUploadingImage}>
                Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    );
}