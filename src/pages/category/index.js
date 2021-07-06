import {
  Box,
  Button,
  Collapse,
  Container,
  Heading,
  HStack,
  Select,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { MdDehaze } from 'react-icons/md';
import { useParams } from 'react-router-dom';

import useCoursesByCategory from '../../hooks/useCoursesByCategory';
import { STATUS } from '../../store/constant';
import CourseRowItem from '../course/components/CourseRowItem';
import FilterComponent from './components/FilterComponent';
import Paginator from './components/Paginator';
import SpinnerLoading from '../../components/SpinnerLoading';

function CategoryPage() {
  const { category } = useParams();
  const [data, status, error] = useCoursesByCategory(category);
  const { isOpen, onToggle } = useDisclosure();

  let content;
  if (status === STATUS.FAILED) {
    content = <Text color="red.400">{error}</Text>;
  } else if (status === STATUS.LOADING) {
    content = <SpinnerLoading />;
  } else if (status === STATUS.SUCCEEDED) {
    content = data.map(item => {
      return <CourseRowItem key={item.id} data={item} />;
    });
  }

  const handleFilter = v => {
    console.log(v);
  };

  return (
    <Container maxW="container.xl" mt="8vh" minH="90vh">
      <Heading py="5" size="xl">
        {category}
      </Heading>
      <Box>
        <HStack>
          <HStack w="20rem">
            <Button
              leftIcon={<MdDehaze />}
              onClick={onToggle}
              colorScheme="blue"
              variant="outline"
            >
              Filter
            </Button>
            <Select placeholder="Select option" defaultValue="newest">
              <option value="newest">Newest</option>
              <option value="hightestRated">Hightest Rated</option>
            </Select>
          </HStack>
          <Text flex="1" color="gray.400" fontSize="lg" textAlign="right">
            {data?.length} results
          </Text>
        </HStack>

        <HStack alignItems="start" spacing="5">
          <Collapse
            in={isOpen}
            animateOpacity
            style={{
              width: '20rem',
              marginTop: '1.25rem',
            }}
          >
            <FilterComponent onFilter={handleFilter} />
          </Collapse>
          <Box flex="1">{content}</Box>
        </HStack>
      </Box>
      <Paginator />
    </Container>
  );
}
export default CategoryPage;
