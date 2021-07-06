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
import React, { useState } from 'react';
import { MdDehaze } from 'react-icons/md';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import qs from 'query-string';

import useCoursesByCategory from '../../hooks/useCoursesByCategory';
import { STATUS } from '../../store/constant';
import CourseRowItem from '../course/components/CourseRowItem';
import FilterComponent from './components/FilterComponent';
import Paginator from './components/Paginator';
import SpinnerLoading from '../../components/SpinnerLoading';

function CategoryPage() {
  const history = useHistory();
  const { category } = useParams();
  const { search, pathname } = useLocation();
  const [query, setQuery] = useState(qs.parse(search));
  const [data, status, error] = useCoursesByCategory(
    category,
    qs.stringify(query)
  );
  const { isOpen, onToggle } = useDisclosure();

  let content;
  if (status === STATUS.FAILED) {
    content = <Text color="red.400">{error}</Text>;
  } else if (status === STATUS.LOADING) {
    content = <SpinnerLoading />;
  } else if (status === STATUS.SUCCEEDED) {
    content = data.data?.map(item => {
      return <CourseRowItem key={item.id} data={item} />;
    });
  }

  const handleFilter = v => {
    console.log(v);
  };

  const handlePageChange = selected => {
    const newQuery = { ...query, page: selected, size: 3 };
    setQuery(newQuery);
    history.push(pathname + '?' + qs.stringify(newQuery));
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
            {data.totalItems} results
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
      <Paginator
        currentPage={data.currentPage}
        totalItems={data.totalItems}
        totalPages={data.totalPages}
        onPageChange={handlePageChange}
      />
    </Container>
  );
}
export default CategoryPage;
