import { Link as RouterLink } from "react-router-dom";
import { Avatar, Box, Image, Wrap, WrapItem, Link, Button } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';
import { logo } from "assets";

export function Navbar(){
    return ( 
        <Box as="nav" display="flex" alignItems="center" justifyContent="space-between" 
            px={10} py={3} pos="sticky" top={0} w="100%"
            backdropFilter='auto' backdropBlur='7px' 
            borderBottom='1px' borderColor='gray.200'
            zIndex="sticky">
            <Link as={RouterLink} to="/">
                <Image src={logo} w={40} alt='logo' objectFit="contain" />
            </Link>
            <Wrap>
                <WrapItem display="flex" alignItems="center" justifyContent="center" gap={2}>
                    <Avatar size='sm' name='Aniket Prakash' 
                    src='https://avatars.githubusercontent.com/u/56336326?v=4' />
                    
                    <Link fontSize='1rem' as={RouterLink} to="/profile">Hello, Aniket</Link>
                </WrapItem>                
                <WrapItem>
                    <Button variant='ghost'><MoonIcon w={5} h={5} color='gray.500' /></Button>
                </WrapItem>
            </Wrap>
        </Box>
    );
};

