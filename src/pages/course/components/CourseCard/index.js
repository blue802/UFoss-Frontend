import React from 'react';
import PropTypes from 'prop-types';
import {
  LinkBox,
  Box,
  Image,
  Text,
  LinkOverlay,
  Popover,
  PopoverArrow,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Heading,
  useMediaQuery,
  PopoverFooter,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import LinesEllipsis from 'react-lines-ellipsis';

import StarGroup from '../../../../components/StarGroup';
import { addToCart } from '../../../../store/cart/cartSlice';
import CourseButton from '../../../../components/CourseButton';

function CourseCard(props) {
  const dispatch = useDispatch();
  const [isLargeScreen] = useMediaQuery('(min-width: 42rem)');
  const {
    id,
    title,
    description,
    imageURL,
    price,
    instructor,
    rate,
    category,
  } = props.data;

  const { rating, score } = rate;
  const point = rating > 0 ? score / (rating * 2) : 0;

  const handleAddToCart = val => {
    if (!props.isInCart) {
      dispatch(addToCart(val));
    }
  };

  return (
    <LinkBox as="article" textAlign="left">
      <Popover trigger="hover" placement="auto">
        <PopoverTrigger>
          <Box bgColor="white">
            <Image rounded="md" src={imageURL} w="full" h="160px" />

            <Heading as="h4" fontSize="lg" mt="3" mb="1">
              <LinkOverlay href={`/categories/${category?.name}/courses/${id}`}>
                {title}
              </LinkOverlay>
            </Heading>
            <Text mb="1" fontSize="sm" color="gray.400">
              {`${instructor?.firstName} ${instructor?.lastName}`}
            </Text>
            <StarGroup point={point} rating={rating} />
            <Text fontWeight="bold" mt="1">
              ${price}
            </Text>
          </Box>
        </PopoverTrigger>
        {isLargeScreen && (
          <PopoverContent
            color="black"
            bg="white"
            borderColor="gray.300"
            px="3"
            py="4"
          >
            <PopoverArrow />
            <PopoverBody>
              <Heading as="h4" fontSize="2xl" mb="2">
                <LinesEllipsis text={title} maxLine={2} />
              </Heading>
              <Text mb="3" fontSize="sm" color="gray.400">
                {`${instructor?.firstName} ${instructor?.lastName}`}
              </Text>
              <Text
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="wrap"
                fontSize="sm"
              >
                <LinesEllipsis text={description} maxLine={4} />
              </Text>
            </PopoverBody>
            <PopoverFooter
              border="0"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
              pb={4}
            >
              <CourseButton
                status={props.isInCart ? 'ADDED' : 'ADD_TO_CART'}
                onClick={() => handleAddToCart(props.data)}
              />
            </PopoverFooter>
          </PopoverContent>
        )}
      </Popover>
    </LinkBox>
  );
}

CourseCard.prototype = {
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
  }),
  isInCart: PropTypes.bool,
};

export default CourseCard;
