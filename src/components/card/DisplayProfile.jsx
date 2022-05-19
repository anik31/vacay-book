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
    useDisclosure
  } from '@chakra-ui/react';
import { EditProfile } from 'components';
import { logoutUser } from 'features/auth/authSlice';
import { useDispatch } from 'react-redux';

export function DisplayProfile(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();

    return (
        <>
        <Center>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '540px', lg: "100%" }}
                height={{ sm: '476px', md: '20rem', lg: "100%" }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'md'}
                padding={4}>
                <Flex flex={1} bg="blue.200">
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        src={
                        'https://avatars.githubusercontent.com/u/56336326?v=4'
                        }
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
                    Aniket Prakash
                </Heading>
                <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                    @anik31
                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    Frontend Developer at Nowhere.
                </Text>
                <Link href={'https://peerlist.io/aniketprakash'} isExternal={true} color={'blue.400'}>https://peerlist.io/aniketprakash</Link>
                
                <Stack direction={'row'} justify={'center'} spacing={6}>
                    <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>3</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            Posts
                        </Text>
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>23</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            Followers
                        </Text>
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>20</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            Following
                        </Text>
                    </Stack>
                </Stack>
                
                <Stack
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
                    onClick={()=>dispatch(logoutUser())}>
                    Logout
                    </Button>
                </Stack>
                </Stack>
            </Stack>
        </Center>
        <EditProfile isOpen={isOpen} onClose={onClose} />
        </>
    );
}