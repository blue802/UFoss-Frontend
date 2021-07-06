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
  VStack,
} from '@chakra-ui/react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import LinesEllipsis from 'react-lines-ellipsis';

import { truncateString } from '../../utils/stringUtils';
import SpinnerLoading from '../SpinnerLoading';

const SearchBar = props => {
  const { data, onChange, isLargeScreen, isSearching } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const _onChange = e => {
    if (onChange && e.target.value) {
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
    <Box key={id} mb="3">
      <Heading as="h5" fontSize="lg" color="gray.600" onClick={onClose}>
        <Link as={ReactLink} to={`/categories/${category.name}/courses/${id}`}>
          {truncateString(title, 30)}
        </Link>
      </Heading>
      <Text fontSize="sm" color="gray.400">
        <LinesEllipsis text={description} />
      </Text>
    </Box>
  ));

  if (isLargeScreen) {
    return (
      <Box flex="1" pos="relative">
        <form onFocus={() => onOpen()} onBlur={() => onClose()}>
          {inputGroup}
          {isOpen && (
            <VStack
              bgColor="white"
              p="3"
              w="full"
              maxW="800px"
              alignItems="start"
              pos="absolute"
              top="3rem"
              left="0"
              border="1px"
              borderColor="gray.300"
              rounded="sm"
            >
              {listLinkItems}
            </VStack>
          )}
        </form>
      </Box>
    );
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
  data: PropTypes.array,
  isSearching: PropTypes.bool,
  isLargeScreen: PropTypes.bool,
};

export default SearchBar;
