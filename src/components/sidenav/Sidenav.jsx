import { Box, Icon, Text, Button, Flex, Stack, useDisclosure } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { MdHome, MdExplore, MdBookmark, MdAccountCircle } from 'react-icons/md';
import { CreatePost } from "components";

const sidenavData = [
    { path: "/", icon: MdHome, text: "Feed" },
    { path: "/explore", icon: MdExplore, text: "Explore" },
    { path: "/bookmarks", icon: MdBookmark, text: "Bookmarks" },
    { path: "/profile", icon: MdAccountCircle, text: "Profile" },
];

export function Sidenav(){
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
        <Box as="nav">
            <Stack direction="column" spacing={5} 
            fontSize="1.5rem" pos="sticky" top="5.5rem">
                {sidenavData.map(navItem=>
                    <NavLink key={navItem.path} color="cyan.400"  to={navItem.path}>
                        {({isActive}) => 
                        <Flex alignItems="center" gap={2} color={isActive?"cyan.400":"gray.600"} px={2} py={1}>
                            <Icon as={navItem.icon} />
                            <Text>{navItem.text}</Text>
                        </Flex>}
                    </NavLink>
                )}
                <Button w="100%" bgColor='cyan.400' color="white" borderRadius="3xl"
                boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                 onClick={onOpen}>Compose</Button>
            </Stack>
        </Box>
        <CreatePost isOpen={isOpen} onClose={onClose} />
        </>
    );
}