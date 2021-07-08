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

import StarGroup from '../../../../components/StarGroup';
import LinesEllipsis from 'react-lines-ellipsis';

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
    payment=true,
  } = props.data;
  const { rating, score } = rate;
  const point = rating > 0 ? score / (rating * 2) : 0;
  const handleAddToCart = () => {
    console.log('added');
  };
  return (
    <Box
      py="5"
      alignItems="start"
      borderBottomWidth="1px"
      borderColor="gray.200"
      justifyContent="space-between"
    >
      <LinkBox flex="1">
        <HStack alignItems="start">
          <Image
            w={['12rem', '12rem', '15rem', '15rem']}
            h="10rem"
            objectFit="cover"
            src={imageURL}
            alt={title}
            rounded="md"
          />

          <Box
            display="flex"
            flex="1"
            flexDirection={['column', 'column', 'column', 'row']}
            pl="2"
          >
            <Box width="100%">
              <Heading as="h4" fontSize={['md', 'md', 'xl']} pb="2">
                <LinkOverlay
                  as={ReactLink}
                  to={`/categories/${category?.name}/courses/${id}`}
                >
                  <LinesEllipsis text={title} maxLine={2} />
                </LinkOverlay>
              </Heading>
              <Text
                pb="2"
                display={['none', 'none', 'block']}
                fontSize={['sm', 'sm', 'lg']}
              >
                <LinesEllipsis text={description} maxLine={2} />
              </Text>
              <Text pb="2" color="gray.400">
                {`${instructor.firstName} ${instructor.lastName}`}
              </Text>
              <StarGroup point={point} rating={rating} />
            </Box>
            {payment ? (
              <Box fontWeight="bold">
                <Button
                  colorScheme="blue"
                  variant="outline"
                  fontSize={['sm', 'sm', 'md']}
                  onClick={handleAddToCart}
                >
                  Go to Courses
                </Button>
              </Box>
            ) : (
              <Box fontWeight="bold">
                <Text textAlign={['left', 'left', 'left', 'right']}>
                  ${price}
                </Text>
                <Button
                  colorScheme="red"
                  variant="outline"
                  onClick={handleAddToCart}
                  fontSize={['sm', 'sm', 'md']}
                  mt={['0.6rem', '0.6rem', '0.8rem', '5.6rem']}
                >
                  Add To Cart
                </Button>
              </Box>
            )}
          </Box>
        </HStack>
      </LinkBox>
    </Box>
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
    payment: PropTypes.bool,
  }),
};

export default CourseRowItem;

