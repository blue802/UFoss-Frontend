import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';

const ProfileForm = () => {
  return (
    <form>
      <Box>
        <FormControl id="firstName" m="20px auto" w="90%">
          <FormLabel color="gray.700" fontWeight="600">
            First name :
          </FormLabel>
          <Input value="Machel" />
        </FormControl>
      </Box>
      <Box>
        <FormControl id="lastName" w="90%" m="20px auto">
          <FormLabel color="gray.700" fontWeight="600">
            Last name :
          </FormLabel>
          <Input value="Join" />
        </FormControl>
      </Box>
      <Box>
        <FormControl id="phone" w="90%" m="20px auto">
          <NumberInput value="0917664174">
            <FormLabel color="gray.700" fontWeight="600">
              Phone :
            </FormLabel>
            <NumberInputField />
          </NumberInput>
        </FormControl>
      </Box>
      <Box>
        <FormControl id="email" w="90%" m="20px auto">
          <FormLabel color="gray.700" fontWeight="600">
            Email :
          </FormLabel>
          <Input
            type="email"
            value="ufoss.udemy@gmail.com"
            color="black"
            fontWeight="600"
            disabled
          />
        </FormControl>
      </Box>

      <Button type="submit" colorScheme="facebook">
        Save
      </Button>
    </form>
  );
};
export default ProfileForm;
