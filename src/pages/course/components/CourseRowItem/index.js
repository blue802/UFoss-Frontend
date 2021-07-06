import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactLink } from 'react-router-dom';
import {
  LinkBox,
  Box,
  Image,
  Text,
  LinkOverlay,
  Button,
  HStack,
  Heading,
} from '@chakra-ui/react';

import { truncateString } from '../../../../utils/stringUtils';
import StarGroup from '../../../../components/StarGroup';

function CourseRowItem(props) {
  const {
    id,
    title,
    description,
    instructor,
    price,
    rate,
    imageURL,
    category,
  } = props.data;
  const { rating, score } = rate;
  const point = rating > 0 ? score / (rating * 2) : 0;

  const handleAddToCart = () => {
    console.log('added');
  };

  return (
    <HStack
      py="5"
      alignItems="start"
      borderBottomWidth="1px"
      borderColor="gray.200"
      justifyContent="space-between"
    >
      <LinkBox flex="1">
        <HStack alignItems="start">
          <Image
            w="248px"
            h="160px"
            objectFit="cover"
            src={imageURL}
            alt={title}
            rounded="md"
          />
          <Box flex="1" pl="2">
            <Heading as="h4" fontSize="xl" pb="2">
              <LinkOverlay
                as={ReactLink}
                to={`/categories/${category?.name}/courses/${id}`}
              >
                {title}
              </LinkOverlay>
            </Heading>
            <Text pb="2">{truncateString(description, 140)}</Text>
            <Text pb="2" color="gray.400">
              {`${instructor.firstName} ${instructor.lastName}`}
            </Text>
            <StarGroup point={point} rating={rating} />
          </Box>
        </HStack>
      </LinkBox>
      <Box fontWeight="bold">
        <Text textAlign="right">${price}</Text>
        <Button
          colorScheme="red"
          variant="outline"
          onClick={handleAddToCart}
          mt="90px"
        >
          Add To Cart
        </Button>
      </Box>
    </HStack>
  );
}

CourseRowItem.prototype = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    instructor: PropTypes.object,
    vote: PropTypes.shape({
      rating: PropTypes.number,
      score: PropTypes.number,
    }),
  }),
};

export default CourseRowItem;
