import {
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
    Spinner
  } from '@chakra-ui/react';
import { EditProfile } from './EditProfile';
import { logoutUser } from 'features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../userSlice';

export function DisplayProfile({value}){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const {user} = useSelector(store=>store.auth);
    const {isLoading, allUsers} = useSelector(store=>store.user);
    const {_id, username, firstName, lastName, profilePic, link, bio, followers, following, posts} = value;
    const currentUser = allUsers.find(({_id})=>_id===user._id);

    const followHandler = () => {
        dispatch(followUser(_id));
    };

    const unfollowHandler = () => {
        dispatch(unfollowUser(_id));
    };
    
    const logoutHandler = () => {
        dispatch(logoutUser());
    };

    return (
        <>
        <Center>
        {isLoading 
        ?   <Center my={5}>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='cyan.500'
                    size='xl'
                />
            </Center>
        :   <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '540px', lg: "100%" }}
                height={{ sm: '476px', md: '20rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'md'}
                padding={4}>
                <Flex flex={1} bg="blue.200">
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        src={profilePic}
                    />
                </Flex>
                <Stack
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={1}
                pt={2}>
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {`${firstName} ${lastName}`}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                    @{username}
                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    {bio}
                </Text>
                <Link href={link} isExternal={true} color={'blue.400'}>{link}</Link>
                
                <Stack direction={'row'} justify={'center'} spacing={6}>
                    <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>{posts}</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            Posts
                        </Text>
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>{followers?.length}</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            Followers
                        </Text>
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>{following?.length}</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            Following
                        </Text>
                    </Stack>
                </Stack>
                
                {username===user.username 
                ? <Stack
                    width={'100%'}
                    mt={'2rem'}
                    direction={'row'}
                    padding={2}
                    justifyContent={'space-between'}
                    alignItems={'center'}>
                    <Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    _focus={{
                        bg: 'gray.200',
                    }}
                    onClick={onOpen}>
                    Edit
                    </Button>
                    <Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'red.400'}
                    color={'white'}
                    boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                        bg: 'red.500',
                    }}
                    _focus={{
                        bg: 'red.500',
                    }}
                    onClick={logoutHandler}>
                    Logout
                    </Button>
                </Stack>
                : 
                <>
                {currentUser && currentUser?.following.some(users=>users._id===_id)
                ?   <Button
                    width={'50%'}
                    mt={'2rem'}
                    padding={2}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'cyan.400'}
                    color={'white'}
                    boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                        bg: 'cyan.500',
                    }}
                    _focus={{
                        bg: 'cyan.500',
                    }}
                    onClick={unfollowHandler}>
                    Unfollow
                    </Button>
                :   <Button
                    width={'50%'}
                    mt={'2rem'}
                    padding={2}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'cyan.400'}
                    color={'white'}
                    boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                        bg: 'cyan.500',
                    }}
                    _focus={{
                        bg: 'cyan.500',
                    }}
                    onClick={followHandler}>
                    Follow
                    </Button>
                    }
                    </>
                }
                </Stack>
            </Stack>
            }
        </Center>
        <EditProfile isOpen={isOpen} onClose={onClose} />
        </>
    );
}