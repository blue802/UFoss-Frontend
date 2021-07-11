import React from 'react';
import {
  Box,
  Heading,
  Text,
  Container,
  Grid,
  GridItem,
  HStack,
  Icon,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { FaRegPlayCircle } from 'react-icons/fa';
import LinesEllipsis from 'react-lines-ellipsis';
import { useParams } from 'react-router-dom';

import StarGroup from '../../components/StarGroup';
import CourseWidget from './components/CourseWidget';
import useCourseById from '../../hooks/useCourseById';
import { STATUS } from '../../store/constant';
import SpinnerLoading from '../../components/SpinnerLoading';
import VideoPlayer from './components/VideoPlayer';

function CourseDetail(props) {
  const { category, courseId } = useParams();
  const [data, status, error] = useCourseById(category, courseId);
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (status === STATUS.FAILED) {
    return (
      <Container maxW="container.2xl" mt="64px" minH="90vh">
        <Text color="red" fontSize="xl">
          {error}
        </Text>
      </Container>
    );
  }

  if (status === STATUS.LOADING || !data) {
    return (
      <Container maxW="container.2xl" mt="64px" minH="90vh" pt="5">
        <SpinnerLoading />
      </Container>
    );
  }

  const { title, description, imageURL, rate, instructor, lessons, price } =
    data;
  const { rating, score } = rate;
  const point = rating > 0 ? score / (rating * 2) : 0;

  const listLesson = () =>
    lessons.map((lesson, index) => (
      <HStack key={lesson.id} py="2">
        <Icon as={FaRegPlayCircle} mr="2" color="gray.400" />
        <Box onClick={onOpen} cursor="pointer">
          <LinesEllipsis text={`Lecture ${index}: ${lesson.title}`} />
        </Box>
      </HStack>
    ));

  const sourcesVideoURL = () => lessons.map(lesson => lesson.videoURL);

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
      <Container maxW="container.xl">
        <Grid templateColumns="repeat(3, 1fr)" gap={12}>
          <GridItem colSpan={2}>
            <Heading as="h5" size="lg" mt="12" mb="5">
              Course content
            </Heading>
            <Box borderWidth="1px" p="3" rounded="sm">
              {listLesson()}
            </Box>
          </GridItem>
          <GridItem colSpan={1} pos="relative" top="-12rem">
            <Box pos="sticky" top="4rem">
              <CourseWidget
                data={{
                  price: price,
                  intro: lessons[0],
                  thumbnail: imageURL,
                }}
                course={data}
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
      <VideoPlayer
        source={sourcesVideoURL()}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
}

export default CourseDetail;
