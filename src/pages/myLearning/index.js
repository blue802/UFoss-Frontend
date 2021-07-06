import {
    Box,
    Container,
    Heading,
    HStack,
    Spinner,
    Text
  } from '@chakra-ui/react';
  import React from 'react';
  import { useParams } from 'react-router-dom';
  
  import useCoursesByCategory from '../../hooks/useCoursesByCategory';
  import { STATUS } from '../../store/constant';
  import CourseRowItem from '../course/components/CourseRowItem';
  
  function CategoryPage() {
    const { category } = useParams();
    const [data, status, error] = useCoursesByCategory('Design');
  
    let content;
    if (status === STATUS.FAILED) {
      content = <Text color="red.400">{error}</Text>;
    } else if (status === STATUS.LOADING) {
      content = (
        <Box textAlign="center">
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      );
    } else if (status === STATUS.SUCCEEDED) {
      content = data.map(item => {
        return <CourseRowItem key={item.id} data={item} check/>;
      });
    }
  
    return (
      <Container
        maxW={[
          'container.sm',
          'container.sm',
          'container.md',
          'container.2xl',
        ]} 
        mt="8vh"
        minH="90vh"
      >
        <Heading py="5" size="xl">
          {category}
        </Heading>
        <Box>
        <Heading py="5" size="xl">
            My Learning
        </Heading>    
          <HStack alignItems="start" spacing="5">
            <Box flex="1">{content}</Box>
          </HStack>
        </Box>
      </Container>
    );
  }
  export default CategoryPage;
  