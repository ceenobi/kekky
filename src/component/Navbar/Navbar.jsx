import React from 'react';
import { Box, Flex, HStack, Button, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export default function Navbar() {
  return (
    <Box p={3}>
      <Flex justify="space-between" align="center">
        <Box>
          <Heading as="h2" fontSize="lg">
            Kekky
          </Heading>
        </Box>
        <HStack spacing="20px">
          <Button size="lg" as={Link} to="/login">
            Login
          </Button>
          <Button size="lg" as={Link} to="/register">
            Register
          </Button>
          <ColorModeSwitcher justifySelf="flex-end" />
        </HStack>
      </Flex>
    </Box>
  );
}
