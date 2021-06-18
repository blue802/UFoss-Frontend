import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Button,
  HStack,
  Icon,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { FaGlobe } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import SearchBar from '../../components/SearchBar';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <HStack px={5} py={3} boxShadow="md">
      <HStack>
        <Link as={ReactLink} to="/">
          <Image src={logo} />
        </Link>
        <Menu isLazy>
          <MenuButton px={6} pt={0.5} fontWeight="medium">
            Category
          </MenuButton>
          <MenuList>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>
      </HStack>

      <SearchBar />

      <HStack>
        <Icon
          as={AiOutlineShoppingCart}
          fontSize="2xl"
          cursor="pointer"
          color="gray.500"
          mr={3}
        />
        <Link as={ReactLink} to="/login" _hover={{ textDecoration: 'none' }}>
          <Button colorScheme="teal" variant="outline" px={6}>
            Log in
          </Button>
        </Link>
        <Link as={ReactLink} to="/signup" _hover={{ textDecoration: 'none' }}>
          <Button colorScheme="teal" variant="solid" px={6}>
            Sign up
          </Button>
        </Link>
        <Menu>
          <MenuButton p={1}>
            <Icon as={FaGlobe} fontSize="xl" color="gray.500" />
          </MenuButton>
          <MenuList>
            <MenuItem>VN</MenuItem>
            <MenuItem>EN</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </HStack>
  );
};

export default Header;
