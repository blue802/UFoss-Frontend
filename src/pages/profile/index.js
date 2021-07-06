import React from 'react';
import ProfileForm from './Components/ProfileForm';
import {
  Box,
  Container,
  Flex,
  Text,
  Image,
  Button,
  Heading,
} from '@chakra-ui/react';

const ProfilePage = () => {
  return (
    <Container
      maxW={['container.sm', 'container.sm', 'container.lg']}
      mt="8vh"
      minH="80vh"
      pt="5"
    >
      <Flex
        margin="0 auto"
        textAlign="center"
        direction={['column', 'column', 'column', 'row']}
      >
        <Box pt="5">
          <Box w="100px" h="100px" w="100%">
            <Box position="relative">
              <Image
                src="https://chuuniotaku.com/wp-content/uploads/2019/07/nhung-cau-noi-hay-cua-itachi.jpg"
                w="100px"
                h="100px"
                borderRadius="50%"
                margin="0 auto"
              />
              <Box
                w="100%"
                textAlign="center"
                position="absolute"
                bottom="-15px"
              >
                <Button colorScheme="teal" w="70px" size="xs">
                  Edit
                </Button>
              </Box>
            </Box>
          </Box>
          <Text color="gray.700" fontWeight="900" mt="7" fontSize="20px">
            Full Name
          </Text>
        </Box>
        <Box flex="1" justifyContent="center" direction="column">
          <Box w="100%" h="10%" p="20px" textAlign="center">
            <Heading as="h3" size="lg" color="gray.700">
              Your Profile
            </Heading>
          </Box>

          <Box flex="1">
            <ProfileForm />
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default ProfilePage;
