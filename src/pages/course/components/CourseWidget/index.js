import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Icon, Heading, Button } from '@chakra-ui/react';
import { FcApproval } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router-dom';

import { addToCart, checkInCart } from '../../../../store/cart/cartSlice';
import useMyCourses from '../../../../hooks/useMyCourses';
const CourseWidget = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const added = useSelector(state => checkInCart(state, props?.data.id));
  const { price, lessons, imageURL } = props.data;
  const [data, status, error] = useMyCourses();
  const myCourse = data.find(item => item.id === props?.data.id);
  const handleBuyNow = val => {
    dispatch(addToCart(val));
    history.push('/cart');
  };

  return (
    <Box
      display={myCourse ? "none" : "block"}
      bgColor="white"
      boxShadow="xl"
      borderWidth="1px"
      rounded="md"
      overflow="hidden"
    >
      {
        lessons[0] && (
          <Box width="full">
            <ReactPlayer
              light={imageURL}
              playing
              url={lessons[0].videoURL}
              controls
              width="100%"
              height="192px"
            />
          </Box>
        )
      }
      < Box p="5" >
        <Heading as="h5" color="black" fontSize="4xl" mb="3">
          ${price}
        </Heading>


        <Button
          w="full"
          colorScheme="red"
          size="lg"
          mb="3"
          onClick={() => dispatch(addToCart(props.data))}
        >
          {added ? 'Added' : 'Add To Cart'}
        </Button>
        <Button
          w="full"
          colorScheme="teal"
          variant="outline"
          size="lg"
          mb="3"
          onClick={() => handleBuyNow(props.data)}
        >
          Buy now
        </Button>
        <Text fontSize="xs" textAlign="center" mb="3">
          30-Day Money-Back Guarantee
        </Text>
        <Text mb="2" fontWeight="semibold">
          This course includes:
        </Text>
        <Box>
          <Box mb={1}>
            <Icon as={FcApproval} /> Lorem ipsum dolor sit amet
          </Box>
          <Box mb={1}>
            <Icon as={FcApproval} /> Lorem ipsum dolor sit amet
          </Box>
          <Box mb={1}>
            <Icon as={FcApproval} /> Lorem ipsum dolor sit amet
          </Box>
        </Box>
      </Box >
    </Box >
  );
};

CourseWidget.prototype = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    instructor: PropTypes.object,
    rate: PropTypes.shape({
      rating: PropTypes.number,
      score: PropTypes.number,
    }),
  }).isRequired,
};

export default CourseWidget;
