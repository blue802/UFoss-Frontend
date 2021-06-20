import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = props => {
  const [value, setValue] = useState('');

  const _onChange = e => {
    setValue(e.target.value);
  };

  return (
    <Box flex="1">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={
            <Icon as={AiOutlineSearch} fontSize="xl" color="gray.400" />
          }
        />
        <Input
          placeholder="Search for everything"
          rounded="full"
          maxW="800px"
          value={value}
          onChange={_onChange}
        />
      </InputGroup>
    </Box>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
};

export default SearchBar;
