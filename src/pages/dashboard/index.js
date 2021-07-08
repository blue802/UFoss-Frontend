import React from 'react';
import ProfileForm from './Components/ProfileForm';
import {
  Box,
  Container,
  Flex,
  Button,
  Heading,
  Avatar,
} from '@chakra-ui/react';
import { useAuth } from '../../services/auth.service';

const Dashboard = () => {
  const [profile] = useAuth();

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
        direction={['column', 'column', 'row']}
      >
        <Box w={['full', 'full', '16rem']} textAlign="center" mb="3">
          <Box pos="relative" display="inline-block">
            <Avatar
              size="2xl"
              name={profile.firstName}
              src={profile.avatarURl}
            />
            <Button
              colorScheme="teal"
              pos="absolute"
              bottom="0"
              right="4"
              size="xs"
            >
              Edit
            </Button>
          </Box>
          <Heading as="h5" color="gray" mt="3" fontSize="2xl">
            {profile.username}
          </Heading>
        </Box>
        <Box flex="1">
          <Heading as="h4" size="lg" color="gray.700" textAlign="center">
            Your Profile
          </Heading>
          <ProfileForm profile={profile} />
        </Box>
      </Flex>
    </Container>
  );
};

export default Dashboard;
