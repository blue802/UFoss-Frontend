import React from 'react';
import {
  Box,
  Heading,
  Text,
  Container,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useSelector } from "react-redux"


import StarGroup from '../../components/StarGroup';
import CourseWidget from './components/CourseWidget';
import { useParams } from 'react-router-dom';
import useCourseById from '../../hooks/useCourseById';
import { truncateString } from '../../utils/stringUtils';
import ShowLesson from './components/ShowLesson';
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
    <ShowLesson index={index} lesson={lesson} />
  ));

  return (
    <Box w="full" mt="64px" minH="90vh">
      <Box w="full" bgGradient="linear(to-r, purple.500, pink.500)" px="2rem">
        <Container maxW="container.xl" py="16" color="white">
          <Grid templateColumns="repeat(3, 1fr)" gap="12">
            <GridItem colSpan={2}>
              <Heading lineHeight="normal" fontWeight="bold" mb="5">
                {title}
              </Heading>
              <Text fontSize="md" mb="3">
                {truncateString(description, 420)}
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
          <GridItem colSpan={1} pos="relative" top="-12rem">
            <Box pos="sticky" top="4rem">
              <CourseWidget
                data={{
                  price: price,
                  intro: lessons[0],
                }}
                course={data}
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default CourseDetail;
