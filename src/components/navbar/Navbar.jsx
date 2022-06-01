import { Link as RouterLink } from "react-router-dom";
import { Avatar, Box, Image, Wrap, WrapItem, Link, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { logo } from "assets";
import { useSelector } from "react-redux";

export function Navbar(){
    const {token, user} = useSelector(store=>store.auth);
    const {allUsers} = useSelector(store=>store.user);
    const currentUser = allUsers.find(({_id})=>_id===user._id);
    const { colorMode, toggleColorMode } = useColorMode();

    return ( 
        <Box as="nav" display="flex" alignItems="center" justifyContent="space-between" 
            px={10} py={3} pos="sticky" top={0} w="100%"
            backdropFilter='auto' backdropBlur='7px' 
            borderBottom='1px' borderColor={useColorModeValue('gray.200','gray.600')}
            zIndex="sticky">
            <Link as={RouterLink} to="/">
                <Image src={logo} w={40} alt='logo' objectFit="contain" />
            </Link>
            <Wrap>
                {token && <WrapItem display="flex" alignItems="center" justifyContent="center" gap={2}>
                    <Avatar size='sm' name={`${user.firstName} ${user.lastName}`} 
                    src={currentUser && currentUser.profilePic} />
                    
                    <Link fontSize='1rem' as={RouterLink} to={`/profile/${user.username}`}>Hello, {user.firstName}</Link>
                </WrapItem> }               
                <WrapItem>
                    <Button variant='ghost' onClick={toggleColorMode}>
                        {colorMode==="light"
                        ?   <MoonIcon w={5} h={5} color='gray.500' />
                        :   <SunIcon w={5} h={5}/>
                        }
                    </Button>
                </WrapItem>
            </Wrap>
        </Box>
    );
};

