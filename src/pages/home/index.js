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
    swipeToSlide: true,
    nextArrow: <NextArrowButton />,
    prevArrow: <PrevArrowButton />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 448,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  let content;
  if (status === STATUS.FAILED) {
    content = <Text color="red.400">{error}</Text>;
  } else if (status === STATUS.LOADING) {
    content = <Spinner />;
  } else if (status === STATUS.SUCCEEDED) {
    content = (
      <>
        {data.map(({ id, name, children }) => (
          <Box mb="2" key={id}>
            <Heading as="h3" mb="5" fontSize="20px" textTransform="capitalize">
              {name}
            </Heading>
            <Slider {...settings}>
              {children?.map(item => (
                <Box px="2" pb="5" key={item.id}>
                  <CourseCard data={item} />
                </Box>
              ))}
            </Slider>
          </Box>
        ))}
      </>
    );
  }

  return (
    <Container maxW="container.2xl" mt="64px" minH="90vh">
      <Box w="full" mb="6rem">
        <Image
          src="/banner.png"
          alt="Segun Adebayo"
          objectFit="cover"
          height={['25vh', 'auto']}
        />
      </Box>
      <Box p={['1', '3', '5']}>{content}</Box>
    </Container>
  );
}

export default HomePage;
