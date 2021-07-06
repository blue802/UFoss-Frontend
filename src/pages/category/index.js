import {
  Box,
  Button,
  Collapse,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  Input,
  Select,
  Spinner,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import { MdDehaze } from 'react-icons/md';
import { useParams } from 'react-router-dom';

import useCoursesByCategory from '../../hooks/useCoursesByCategory';
import { STATUS } from '../../store/constant';
import CourseRowItem from '../course/components/CourseRowItem';
import FilterComponent from './components/FilterComponent';
import Paginator from './components/Paginator';

function CategoryPage() {
  const [isSmallScreen] = useMediaQuery('(max-width: 1024px)');
  const { isOpen, onOpen, onClose,onToggle } = useDisclosure();
  const { category } = useParams();
  const [data, status, error] = useCoursesByCategory(category);

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
      return <CourseRowItem key={item.id} data={item} />;
    });
  }

  const handleFilter = v => {
    console.log(v);
  };

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
        <HStack>
          <HStack w="20rem">
            {isSmallScreen
              ?
              <Button
                leftIcon={<MdDehaze />}
                onClick={onOpen}
                colorScheme="blue"
                variant="outline"
              >
                Filter
              </Button>
              :
              <Button
              leftIcon={<MdDehaze />}
              onClick={onToggle}
              colorScheme="blue"
              variant="outline"
              >
                Filter
              </Button> 
            }
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
          {isSmallScreen
            ?
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Filter</DrawerHeader>

                <DrawerBody>
                  <FilterComponent onFilter={handleFilter} />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            :
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
          }
          <Box flex="1">{content}</Box>
        </HStack>
      </Box>
      <Paginator />
    </Container>
  );
}
export default CategoryPage;
