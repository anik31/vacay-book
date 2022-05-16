import { Box, Text, Button, Stack, Divider, Avatar } from "@chakra-ui/react";

const follow = [
    { name:"Aniket", username:"anik31" },
    { name:"Aniket", username:"anik1" },
    { name:"Aniket", username:"anik3" },
    { name:"Aniket", username:"anik2" }
  ];

export function Follow(){
    return (
        <Box>
            <Stack direction="column" spacing={3} 
            pos="sticky" top="5rem">
                <Text fontWeight="semibold" fontSize="1.3rem">People to follow</Text>
                <Divider />
                <Stack spacing={4} direction="column" align="center">
                {follow.map(user=>
                    <Stack color="gray.600" direction="row" align="center" spacing={2} key={user.username}>
                        <Stack spacing={2} direction="row" align="center">
                            <Avatar size="sm" name={user.name} 
                            src="https://avatars.githubusercontent.com/u/56336326?v=4" />
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>Aniket Prakash</Text>
                                <Text color={'gray.500'}>@anik31</Text>
                            </Stack>
                        </Stack>
                        <Button maxH={8} variant="outline" borderRadius="3xl">Follow</Button>
                    </Stack>
                )}
                </Stack>
            </Stack>
        </Box>
    );
}