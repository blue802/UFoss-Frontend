import React from 'react';
import {
  Image,
  Box,
  Container,
  Heading,
  Text,
  Spinner,
} from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';

import CourseCard from '../course/components/CourseCard';
import NextArrowButton from './Components/NextArrowButton';
import PrevArrowButton from './Components/PrevArrowButton';
import useCourses from '../../hooks/useCourses';
import { STATUS } from '../../store/constant';

function HomePage() {
  const [data, status, error] = useCourses();
  const settings = {
    dots: false,
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrowButton />,
    prevArrow: <PrevArrowButton />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 448,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let content;
  if (status === STATUS.FAILED) {
    return <Text color="red.400">{error}</Text>;
  } else if (status === STATUS.LOADING) {
    content = <Spinner />;
  } else if (status === STATUS.SUCCEEDED) {
    content = (
      <Slider {...settings}>
        {data?.map(item => (
          <Box px="2" pb="5" key={item.id}>
            <CourseCard data={item} />
          </Box>
        ))}
      </Slider>
    );
  }

  return (
    <Container maxW="container.2xl" mt="8vh" minH="90vh">
      <Box w="full" mb="6rem">
        <Image src="/banner.png" alt="Segun Adebayo" />
      </Box>
      <Box mb="2">
        <Heading as="h3" mb="5" fontSize="20px">
          Web Development
        </Heading>
        {content}
      </Box>
      <Box mb="5">
        <Heading as="h3" mb="5" fontSize="20px">
          Design
        </Heading>
        {content}
      </Box>
    </Container>
  );
}

export default HomePage;
