import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';

const HomePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    function fetchData() {
      axios
        .get('api/courses')
        .then(res => res.data)
        .then(data => setCourses(data));
    }

    fetchData();
  }, []);

  return (
    <Box>
      <OrderedList>
        {courses.length > 0 ? (
          courses.map(({ id, title, description, imageUrl }) => (
            <ListItem key={id}>
              <Image src={imageUrl} />
              <Heading>{title}</Heading>
              <Text>{description}</Text>
            </ListItem>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </OrderedList>
    </Box>
  );
};

export default HomePage;
