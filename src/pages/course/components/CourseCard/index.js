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
  PopoverFooter,
  Button,
  Heading,
} from '@chakra-ui/react';

import { truncateString } from '../../../../utils/stringUtils';
import StarGroup from '../../../../components/StarGroup';

function CourseCard(props) {
  const { id, title, description, imageUrl, price, instructor, votes } =
    props.data;
  return (
    <LinkBox as="article" textAlign="left">
      <Popover trigger="hover" placement="auto">
        <PopoverTrigger>
          <Box bgColor="white">
            <Image rounded="md" src={imageUrl} w="full" h="160px" />

            <Heading as="h4" fontSize="lg" mt="3" mb="1">
              <LinkOverlay href={`/courses/${id}`}>{title}</LinkOverlay>
            </Heading>
            <Text mb="1" fontSize="sm" color="gray.400">
              {instructor}
            </Text>
            <StarGroup votes={votes} />
            <Text fontWeight="bold">${price}</Text>
          </Box>
        </PopoverTrigger>
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
              {truncateString(title, 50)}
            </Heading>
            <Text mb="3" fontSize="sm" color="gray.400">
              {instructor}
            </Text>
            <Text
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="wrap"
              fontSize="sm"
            >
              {truncateString(description, 180)}
            </Text>
          </PopoverBody>
          <PopoverFooter
            border="0"
            d="flex"
            alignItems="center"
            justifyContent="space-between"
            pb={4}
          >
            <Button colorScheme="red" width="full" color="white">
              Add To Card
            </Button>
          </PopoverFooter>
        </PopoverContent>
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
    instructor: PropTypes.string, //this must be object
  }),
};

export default CourseCard;
