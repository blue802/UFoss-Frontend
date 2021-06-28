import React from 'react';
import {
  Box,
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
import { useAuth } from '../../services/auth.service';
import AvatarNav from '../../components/AvatarNav';

const Header = () => {
  const [profile] = useAuth();

  return (
    <HStack
      px={5}
      py={3}
      boxShadow="md"
      position="fixed"
      top="0"
      w="full"
      bgColor="white"
      zIndex="10"
    >
      <HStack>
        <Link href="/">
          <Image src={logo} />
        </Link>
        <Menu isLazy>
          <MenuButton px={6} pt={0.5} fontWeight="medium">
            Category
          </MenuButton>
          <MenuList>
            <MenuItem>Web Development</MenuItem>
            <MenuItem>Business</MenuItem>
            <MenuItem>Design</MenuItem>
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
        {profile ? (
          <AvatarNav profile={profile} />
        ) : (
          <Box>
            <Link href="/login" _hover={{ textDecoration: 'none' }}>
              <Button colorScheme="teal" variant="outline" px={6}>
                Log in
              </Button>
            </Link>
            <Link href="/register" ml={3} _hover={{ textDecoration: 'none' }}>
              <Button colorScheme="teal" variant="solid" px={6}>
                Sign up
              </Button>
            </Link>
          </Box>
        )}

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
