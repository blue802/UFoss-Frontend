import React from 'react';
import ImgProfileAvt from '../../assets/images/img-profile-avt.jpg';
import ProfileForm from './Components/ProfileForm'
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
    <Container maxW="container.2xl" mt="8vh" minH="90vh" pt="5">
      <Flex w="70%" h="600px" margin="0 auto" textAlign="center">
        <Box w="200px" pt="5">
          <Flex w="100px" h="100px" direction="column" w="100%">
            <Box position="relative">
              <Image
                src={ImgProfileAvt}
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
          </Flex>
          <Text color="gray.700" fontWeight="900" mt="7" fontSize="20px">
            Full Name
          </Text>
        </Box>
        <Box flex="1" justifyContent="center" direction="column" >
          <Box w="100%" h="10%" p="1%" textAlign="center">
            <Heading as="h3" size="lg" color="gray.700">
              Your Profile
            </Heading>
          </Box>

          <Box w="100%" flex="1">
            <ProfileForm/>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default ProfilePage;
