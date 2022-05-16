import {
    Box,
    Center,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Button
} from '@chakra-ui/react';
import {MdBookmarkBorder, MdFavoriteBorder} from "react-icons/md";

export function DisplayPost(){
    return (
    <Center py={5}>
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        border='1px' borderColor='gray.200'
        rounded={'md'}
        px={5}
        py={4}
        overflow={'hidden'}
        boxShadow={'md'}
        >
        
        <Stack direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars.githubusercontent.com/u/56336326?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Aniket Prakash</Text>
            <Text color={'gray.500'}>Feb 08, 2021</Text>
          </Stack>
          
        </Stack>

        <Stack my={2}>
            <Text color={'gray.500'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum.
            </Text>
        </Stack>

        <Stack direction={'row'} spacing={4} align={'center'}>
            <Stack direction={'row'} spacing={1} align={'center'}>
                <IconButton
                    icon={<MdFavoriteBorder/>}
                    variant="ghost"
                    fontSize="1.5rem"
                    color={'gray.700'}
                />
                <span>20 Likes</span>
            </Stack>
            <IconButton
                icon={<MdBookmarkBorder/>}
                variant="ghost"
                fontSize="1.5rem"
                color={'gray.700'}
            />
        </Stack>

        <Stack direction={'row'} spacing={4} align={'center'} my={2}>
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    placeholder='Enter Comment'
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm'>Post</Button>
                </InputRightElement>
            </InputGroup>
        </Stack>

        <Stack direction={'column'} spacing={1} mb={2} 
        border='1px' borderColor='gray.200'rounded={'md'} py={2} px={3}>
            <Stack direction={'row'} spacing={1} align={'center'}>
                <Avatar
                    src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                    alt={'Author'}
                    size="xs"
                />
                <Text fontWeight={600}>Achim Rolle</Text>
            </Stack>
            <Text color={'gray.500'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </Text>
        </Stack>        

        <Stack direction={'column'} spacing={1} mb={2} 
        border='1px' borderColor='gray.200'rounded={'md'} py={2} px={3}>
            <Stack direction={'row'} spacing={1} align={'center'}>
                <Avatar
                    src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                    alt={'Author'}
                    size="xs"
                />
                <Text fontWeight={600}>Achim Rolle</Text>
            </Stack>
            <Text color={'gray.500'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </Text>
        </Stack>    

      </Box>
    </Center>
  );
}