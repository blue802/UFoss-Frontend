import React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';

function App() {
  return (
    <Container
      bg="red.400"
      w={[100, 300, 500]}
      textAlign="center"
      color="white"
    >
      <Heading>Hello World!</Heading>
      <Text>Are you ready to code?</Text>
    </Container>
  );
}

export default App;
