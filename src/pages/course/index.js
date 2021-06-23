import React from 'react';
import {
  Box,
  Heading,
  Text,
  Container,
  Grid,
  GridItem,
  HStack,
  Link,
  Icon,
} from '@chakra-ui/react';

import StarGroup from '../../components/StarGroup';
import CourseWidget from './components/CourseWidget';
import { useParams } from 'react-router-dom';
import useCourseById from '../../hooks/useCourseById';
import { truncateString } from '../../utils/stringUtils';
import { FaRegPlayCircle } from 'react-icons/fa';

function CourseDetail(props) {
  const { courseId } = useParams();
  const data = useCourseById(courseId);

  if (!data) {
    return (
      <Container maxW="container.xl" mt="8vh" minH="90vh">
        <Text>Loading...</Text>
      </Container>
    );
  }

  const listLesson = data.lessons.map((lesson, index) => (
    <HStack key={lesson.id} py="2">
      <Icon as={FaRegPlayCircle} mr="2" color="gray.400" />
      <Link href={lesson.url} isExternal isTruncated>
        {lesson.title}
      </Link>
    </HStack>
  ));

  return (
    <Box w="full" mt="8vh" minH="90vh">
      <Box w="full" bgColor="black" px="2rem">
        <Container maxW="container.xl" py="16" color="white">
          <Grid templateColumns="repeat(3, 1fr)" gap={12}>
            <GridItem colSpan={2}>
              <Heading lineHeight="normal" fontWeight="bold" mb="5">
                {data.title}
              </Heading>
              <Text fontSize="md" mb="3">
                {truncateString(data.description, 420)}
              </Text>
              <Box mb="3">
                <StarGroup votes={data.votes} showAvg={true} />
              </Box>
              <Text as="i" fontSize="md">
                Created by <Text as="b">{data.instructor}</Text>
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(3, 1fr)" gap={12}>
          <GridItem colSpan={2}>
            <Heading as="h5" size="lg" mt="12" mb="5">
              Course content
            </Heading>
            <Box borderWidth="1px" p="3" rounded="sm">
              {listLesson}
            </Box>
          </GridItem>
          <GridItem colSpan={1} pos="relative" top="-18rem">
            <Box pos="sticky" top="4rem">
              <CourseWidget
                data={{
                  price: data.price,
                  intro: data.lessons[0],
                }}
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default CourseDetail;
