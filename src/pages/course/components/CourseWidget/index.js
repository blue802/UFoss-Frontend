import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Icon, Heading, Button } from '@chakra-ui/react';
import { FcApproval } from 'react-icons/fc';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../../../store/cart/cartSlice';
import ReactPlayer from 'react-player';

const CourseWidget = props => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const carts = useSelector(state => state.carts);
  const { price, intro, thumbnail } = props.data;

  const handleAddToCart = val => {
    let checkIdCard = carts.find(cart => cart.id === val.id);
    if (!checkIdCard) {
      dispatch(addToCart(val));
      setIsAdded(true);
    }
  };

  return (
    <Box
      bgColor="white"
      boxShadow="xl"
      borderWidth="1px"
      rounded="md"
      overflow="hidden"
    >
      {intro && (
        <Box width="full">
          <ReactPlayer
            light={thumbnail}
            playing
            url={intro.videoURL}
            controls
            width="100%"
            height="192px"
          />
        </Box>
      )}
      <Box p="5">
        <Heading as="h5" color="black" fontSize="4xl" mb="3">
          ${price}
        </Heading>
        <Button
          w="full"
          colorScheme="red"
          size="lg"
          mb="3"
          onClick={() => handleAddToCart(props.course)}
        >
          {isAdded ? 'Added' : 'Add To Cart'}
        </Button>
        <Button w="full" colorScheme="teal" variant="outline" size="lg" mb="3">
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
      </Box>
    </Box>
  );
};

CourseWidget.prototype = {
  data: PropTypes.shape({
    price: PropTypes.number.isRequired,
    intro: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
  }),
};

export default CourseWidget;
