import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useToast,
    useColorModeValue
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signupUser } from './authSlice';

export function Signup(){
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: ""
    });
    const dispatch = useDispatch();
    const toast = useToast();

    const signupHandler = () => {
        if(!credentials.username.trim() || !credentials.password.trim() || !credentials.firstName.trim() 
        || !credentials.lastName.trim() || !confirmPassword.trim()){
            toast({
                title: "Please fill all fields",
                status: "warning",
                position: "top-right",
                isClosable: true,
                duration: 3000
            })
        }else if(credentials.password!==confirmPassword){
            toast({
                title: "Passwords don't match",
                status: "warning",
                position: "top-right",
                isClosable: true,
                duration: 3000
            })
        }else{
            dispatch(signupUser(credentials));
        }
    };

    return (
        <Flex
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} px={6} py={10}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={useColorModeValue('gray.600','')}>
                    to enjoy our social media application ??????
                    </Text>
                </Stack>
                <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" value={credentials.firstName} 
                                    onChange={({target})=>
                                    setCredentials(prev=>({...prev,firstName:target.value}))} />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName" isRequired>
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" value={credentials.lastName} 
                                    onChange={({target})=>
                                    setCredentials(prev=>({...prev,lastName:target.value}))} />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="username" isRequired>
                            <FormLabel>Username</FormLabel>
                            <Input value={credentials.username} 
                            onChange={({target})=>
                            setCredentials(prev=>({...prev,username:target.value}))} />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} 
                                value={credentials.password} 
                                onChange={({target})=>
                                setCredentials(prev=>({...prev,password:target.value}))} />
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
                        <FormControl id="confirm-password" isRequired>
                            <FormLabel>Confirm Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword1 ? 'text' : 'password'} value={confirmPassword} 
                                onChange={({target})=>setConfirmPassword(target.value)} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                        setShowPassword1((showPassword) => !showPassword)
                                        }>
                                        {showPassword1 ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'cyan.400'}
                                color={'white'}
                                _hover={{
                                bg: 'cyan.500',
                                }}
                                onClick={signupHandler}>
                                Sign up
                            </Button>
                        </Stack>
                        <Flex justify="center" align="center" gap={2}>
                            <Text>Already a user?</Text>
                            <Text color="cyan.400">
                                <Link to="/login">Login</Link>
                            </Text>
                        </Flex>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}