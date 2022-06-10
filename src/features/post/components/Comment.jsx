import {
    Text,
    Stack,
    Avatar
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export function Comment({comment: {text, username}}){
    const {allUsers} = useSelector(store=>store.user);
    const {firstName, lastName, profilePic} = allUsers.find(user=>user.username===username);
    const fullName = firstName + " " + lastName;

    return (
        <Stack direction={'column'} spacing={1} mb={1} 
         py={1} px={3}>
            <Stack direction={'row'} spacing={1} align={'center'}>
                <Avatar
                    src={profilePic}
                    alt={fullName}
                    size="xs"
                />
                <Text fontWeight={600}>{fullName}</Text>
            </Stack>
            <Text pl={7}>{text}</Text>
        </Stack>
    );
};