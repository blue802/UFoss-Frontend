import React from 'react';
import { Image, Box, Container, Heading, Text, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import Slider from 'react-slick';

import CourseCard from '../course/components/CourseCard';
import NextArrowButton from './Components/NextArrowButton';
import PrevArrowButton from './Components/PrevArrowButton';
import useCourses from '../../hooks/useCourses';
import { STATUS } from '../../store/constant';
import SpinnerLoading from '../../components/SpinnerLoading';

import useMyCourses from '../../hooks/useMyCourses'

function HomePage() {
  const [data, status, error] = useCourses();
  const [myCourse] = useMyCourses();
  console.log("day le mycourses", myCourse)

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
    content = <SpinnerLoading />;
  } else if (status === STATUS.SUCCEEDED) {
    content = (
      <>
        {data.map(({ id, name, children }) => (
          <Box mb="2" key={id}>
            <Heading as="h3" mb="5" fontSize="20px" textTransform="capitalize">
              <Link as={ReactLink} to={`/categories/${name}`}>
                {name}
              </Link>
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
