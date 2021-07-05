import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from '@chakra-ui/react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';

const SearchBar = props => {
  const { onChange, isLargeScreen } = props;
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
        <DrawerContent>
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
          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
  isLargeScreen: PropTypes.bool,
};

export default SearchBar;
