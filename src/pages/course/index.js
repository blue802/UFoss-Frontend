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
  useMediaQuery,
} from '@chakra-ui/react';
import LinesEllipsis from 'react-lines-ellipsis';

import StarGroup from '../../components/StarGroup';
import CourseWidget from './components/CourseWidget';
import { useParams } from 'react-router-dom';
import useCourseById from '../../hooks/useCourseById';
import { FaRegPlayCircle } from 'react-icons/fa';

function CourseDetail(props) {
  const { category, courseId } = useParams();
  const data = useCourseById(category, courseId);

  if (!data) {
    return (
      <Container maxW="container.2xl" mt="64px" minH="90vh">
        <Text>Loading...</Text>
      </Container>
    );
  }

  const { title, description, rate, instructor, lessons, price } = data;
  const { rating, score } = rate;
  const point = rating > 0 ? score / (rating * 2) : 0;

  const listLesson = lessons.map((lesson, index) => (
    <HStack key={lesson.id} py="2">
      <Icon as={FaRegPlayCircle} mr="2" color="gray.400" />
      <Link href={lesson.videoURL} isExternal isTruncated>
        Lecture {index}: {lesson.title}
      </Link>
    </HStack>
  ));

  return (
    <Box w="full" mt="64px" minH="90vh">
      <Box
        w="full"
        bgGradient="linear(to-r, purple.500, pink.500)"
        px={['0', '2', '5']}
      >
        <Container maxW="container.xl" py={['8', '8', '16']} color="white">
          <Grid templateColumns="repeat(3, 1fr)" gap={['6', '6', '6', '12']}>
            <GridItem colSpan={[3, 3, 2]}>
              <Heading lineHeight="normal" fontWeight="bold" mb="5">
                {title}
              </Heading>
              <Text fontSize="md" mb="3">
                <LinesEllipsis text={description} maxLine={3} />
              </Text>
              <Box mb="3">
                <StarGroup rating={rating} point={point} showAvg={true} />
              </Box>
              <Text as="i" fontSize="md">
                Created by{' '}
                <Text as="b">{`${instructor.firstName} ${instructor.lastName}`}</Text>
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Box px={['0', '2', '5']}>
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(3, 1fr)" gap={['6', '6', '6', '12']}>
            <GridItem
              colSpan={[3, 3, 2]}
              rowStart={[2, 2, 1]}
              rowEnd={[3, 3, 2]}
            >
              <Heading as="h5" size="lg" mt={['2', '2', '8']} mb="5">
                Course content
              </Heading>
              <Box borderWidth="1px" p="3" rounded="sm" mb="3">
                {listLesson}
              </Box>
            </GridItem>
            <GridItem
              colSpan={[3, 3, 1]}
              rowStart="1"
              rowEnd={[2, 2, 2]}
              pos="relative"
              top={['0', '0', '-12rem']}
            >
              <Box pos="sticky" top="4rem">
                <CourseWidget
                  data={{
                    price: price,
                    intro: lessons[0],
                  }}
                />
              </Box>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default CourseDetail;
