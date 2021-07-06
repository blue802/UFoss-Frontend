import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactLink } from 'react-router-dom';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { truncateString } from '../../utils/stringUtils';
import SpinnerLoading from '../SpinnerLoading';

const SearchBar = props => {
  const { data, onChange, isLargeScreen, isSearching } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const _onChange = e => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const inputGroup = (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<Icon as={AiOutlineSearch} fontSize="xl" color="gray.400" />}
      />
      <Input
        placeholder="Search for everything"
        rounded="full"
        maxW="800px"
        onChange={_onChange}
      />
    </InputGroup>
  );

  const listLinkItems = data?.map(({ id, title, description, category }) => (
    <Link
      as={ReactLink}
      to={`/categories/${category.name}/courses/${id}`}
      key={id}
      display="inline-block"
      mb="3"
      onClick={onClose}
    >
      <Heading as="h5" fontSize="xl" color="gray.600">
        {truncateString(title, 30)}
      </Heading>
      <Text fontSize="sm" color="gray.400">
        {truncateString(description, 40)}
      </Text>
    </Link>
  ));

  if (isLargeScreen) {
    return <Box flex="1">{inputGroup}</Box>;
  }

  return (
    <>
      <Button
        rounded="full"
        paddingInlineStart="2"
        paddingInlineEnd="2"
        onClick={onOpen}
      >
        <Icon as={AiOutlineSearch} fontSize="xl" color="gray.400" />
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerContent overflow="hidden">
          <DrawerHeader textAlign="right">
            <Icon
              as={AiOutlineCloseCircle}
              fontSize="3xl"
              color="gray.400"
              mb="3"
              cursor="pointer"
              onClick={onClose}
            />
            {inputGroup}
          </DrawerHeader>
          <DrawerBody>
            {isSearching ? <SpinnerLoading /> : listLinkItems}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
  data: PropTypes.arrayOf({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.object,
  }),
  isSearching: PropTypes.bool,
  isLargeScreen: PropTypes.bool,
};

export default SearchBar;
