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
    vote,
    imageURL,
    category,
  } = props.data;
  const check = props.check
  // const { rating, score } = vote;
  // const point = rating > 0 && score / (rating * 2);

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
              w={['12rem','12rem','15rem','15rem']}
              h='10rem'
              objectFit="cover"
              src={imageURL}
              alt={title}
              rounded="md"
            /> 
          <Box display="flex" width="100%" flexDirection={['column','column','column','row']} pl="2">
            <Box width="100%">
              <Heading as="h4" fontSize={['sm','sm','md',"xl"]} pb="2">
                <LinkOverlay
                  as={ReactLink}
                  to={`/categories/${category?.name}/courses/${id}`}
                >
                  {title}
                </LinkOverlay>
              </Heading>
              <Text pb="2" display={['none','none','none','block']}>{truncateString(description, 100)}</Text>
              <Text pb="2" color="gray.400">
                {instructor}
              </Text>
              {/* <StarGroup point={point} rating={rating} /> */}
            </Box>
            {check?
            <Box fontWeight="bold">
              <Button
              colorScheme="blue"
              variant="outline"
              onClick={handleAddToCart}
            >
              Go to Courses
              </Button>
            </Box>
            :
            <Box fontWeight="bold">
              <Text textAlign={['left','left','left','right']}>${price}</Text>
              <Button
                colorScheme="red"
                variant="outline"
                onClick={handleAddToCart}
                mt={['0.6rem','0.6rem','0.8rem','5.6rem']}
              >
                Add To Cart
              </Button>
            </Box>
            }
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
    instructor: PropTypes.string, //this must be object
    vote: PropTypes.shape({
      rating: PropTypes.number,
      score: PropTypes.number,
    }),
  }),
};

export default CourseRowItem;
// {check ? (
//               <Box fontWeight="bold">
//                 <Button
//                   colorScheme="blue"
//                   variant="outline"
//                   onClick={handleAddToCart}
//                   mt={['0.6rem', '0.6rem', '0.8rem', '5.6rem']}
//                 >
//                   Go to Courses
//                 </Button>
//               </Box>
//             ) : (
//               <Box fontWeight="bold">
//                 <Text textAlign={['left', 'left', 'left', 'right']}>
//                   ${price}
//                 </Text>
//                 <Button
//                   colorScheme="red"
//                   variant="outline"
//                   onClick={handleAddToCart}
//                   mt={['0.6rem', '0.6rem', '0.8rem', '5.6rem']}
//                 >
//                   Add To Cart
//                 </Button>
//               </Box>
//             )}