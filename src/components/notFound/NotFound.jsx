import { Heading, Text, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <Flex textAlign="center" align="center" direction="column" justify="center"  py={10} px={6} h="80vh">
        <Heading
            display="inline-block"
            as="h2"
            size="4xl"
            bgGradient="linear(to-r, cyan.400, cyan.600)"
            backgroundClip="text">
            404
        </Heading>
        <Text fontSize="2.5rem" mt={3} mb={2}>
            Page Not Found
        </Text>
        <Text color={'gray.500'} mb={6}>
            The page you're looking for does not seem to exist
        </Text>
        <Link to="/">
            <Button
                colorScheme="cyan"
                bgGradient="linear(to-r, cyan.400, cyan.500, cyan.600)"
                color="white"
                variant="solid">
                Go to Home
            </Button>
        </Link>
    </Flex>
  );
}