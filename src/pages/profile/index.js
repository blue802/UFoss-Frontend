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
  HStack,
  Spinner,
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import CourseRowItem from '../course/components/CourseRowItem';
import { useParams } from 'react-router-dom';
import useCoursesByCategory from '../../hooks/useCoursesByCategory';
import { STATUS } from '../../store/constant';
const ProfilePage = () => {
  const { category } = useParams();
  const [data, status, error] = useCoursesByCategory('Design');

  let content;
  if (status === STATUS.FAILED) {
    content = <Text color="red.400">{error}</Text>;
  } else if (status === STATUS.LOADING) {
    content = (
      <Box textAlign="center">
        <Spinner
          thickness="5px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    );
  } else if (status === STATUS.SUCCEEDED) {
    content = data.map(item => {
      return <CourseRowItem key={item.id} data={item} check/>;
    });
  }
  return (
    <Container
      maxW={['container.sm', 'container.sm', 'container.xl']}
      mt="8vh"
      minH="80vh"
      pt="5"
    >
      <Tabs>
        <TabList>
          <Tab>Profile</Tab>
          <Tab>My Courses</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
          <Box>
        <Heading py="5" size="xl">
            My Learning
        </Heading>    
          <HStack alignItems="start" spacing="5">
            <Box flex="1">{content}</Box>
          </HStack>
        </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
    // <Container
    //   maxW={['container.sm', 'container.sm', 'container.lg']}
    //   mt="8vh"
    //   minH="80vh"
    //   pt="5"
    // >
    //   <Flex
    //     margin="0 auto"
    //     textAlign="center"
    //     direction={['column', 'column', 'column', 'row']}
    //   >
    //     <Box pt="5">
    //       <Box w="100px" h="100px" w="100%">
    //         <Box position="relative">
    //           <Image
    //             src="https://chuuniotaku.com/wp-content/uploads/2019/07/nhung-cau-noi-hay-cua-itachi.jpg"
    //             w="100px"
    //             h="100px"
    //             borderRadius="50%"
    //             margin="0 auto"
    //           />
    //           <Box
    //             w="100%"
    //             textAlign="center"
    //             position="absolute"
    //             bottom="-15px"
    //           >
    //             <Button colorScheme="teal" w="70px" size="xs">
    //               Edit
    //             </Button>
    //           </Box>
    //         </Box>
    //       </Box>
    //       <Text color="gray.700" fontWeight="900" mt="7" fontSize="20px">
    //         Full Name
    //       </Text>
    //     </Box>
    //     <Box flex="1" justifyContent="center" direction="column">
    //       <Box w="100%" h="10%" p="20px" textAlign="center">
    //         <Heading as="h3" size="lg" color="gray.700">
    //           Your Profile
    //         </Heading>
    //       </Box>

    //       <Box flex="1">
    //         <ProfileForm />
    //       </Box>
    //     </Box>
    //   </Flex>
    // </Container>
  );
};

export default ProfilePage;