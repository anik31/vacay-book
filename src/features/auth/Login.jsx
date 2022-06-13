import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './authSlice';

export function Login(){    
    const {isAuthLoading} = useSelector(store=>store.auth);
    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });
    const dispatch = useDispatch();
    const toast = useToast();
    const testCredentials = {
        username: "anik31",
        password: "aniketPrakash123"
    }

    const loginHandler = () => {
        if(credentials.username.trim() && credentials.password.trim()){
            dispatch(loginUser(credentials));
        }else{
            toast({
                title: "Please enter username & password",
                status: "warning",
                position: "top-right",
                isClosable: true,
                duration: 3000
            })
        }
    };

    const testLoginHandler = () => {
        setCredentials(testCredentials);
        dispatch(loginUser(testCredentials));
    };

    return (
        <Flex
        minH={'90vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={6} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={useColorModeValue('gray.600','')}>
                        to enjoy our social media application ✌️
                    </Text>
                </Stack>
                <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                    <Stack spacing={4}>
                        <FormControl id="username" isRequired>
                            <FormLabel>Username</FormLabel>
                            <Input placeholder='Enter username' value={credentials.username} 
                            onChange={({target})=>setCredentials(prev=>({...prev,username:target.value}))} />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} placeholder="Enter password"  
                                value={credentials.password} 
                                onChange={({target})=>setCredentials(prev=>({...prev,password:target.value}))}/>
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                        setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={3}>
                            <Button
                                borderColor={'cyan.400'}
                                color={'cyan.400'}
                                _hover={{
                                bg: 'cyan.500',
                                color:"white"
                                }}
                                variant="outline"
                                isDisabled={isAuthLoading}
                                onClick={testLoginHandler}>
                                Test Login
                            </Button>
                            <Button
                                bg={'cyan.400'}
                                color={'white'}
                                _hover={{
                                bg: 'cyan.500',
                                }}
                                isLoading={isAuthLoading}
                                loadingText='Logging in'
                                onClick={loginHandler}>
                                Sign in
                            </Button>
                        </Stack>
                        
                        <Flex justify="center" align="center" gap={2}>
                            <Text>Not a user?</Text>
                            <Text color="cyan.400">
                                <Link to="/signup">Sign up</Link>
                            </Text>
                        </Flex>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}