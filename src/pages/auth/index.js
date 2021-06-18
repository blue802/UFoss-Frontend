import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@chakra-ui/react';
import { FaEnvelope, FaLock, FaUserAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

import ButtonSocialLogin from './components/ButtonSocialLogin';
import { useLocation } from 'react-router-dom';

function Authentication() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  let isSignUp = location.pathname === '/signup';

  const usernameValidate = {
    required: 'Username is required',
    minLength: {
      value: 3,
      message: 'The minimum length is 3',
    },
    maxLength: {
      value: 20,
      message: 'The maximum length is 20',
    },
  };

  const emailValidate = {
    required: 'Email is required',
    pattern: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: 'You have entered an invalid email address!',
    },
  };

  const passwordValidate = {
    required: 'Password is required',
    pattern: {
      value:
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/,
      message:
        'The password must be between 8 and 20 characters including at least one lowercase letter, one uppercase letter, one numeric digit, and one special character',
    },
  };

  const onSubmit = data => {};

  const _onSuccess = res => {};

  const _onFailure = res => {};

  return (
    <Container w="320px" mt="2rem">
      {isSignUp ? (
        <Heading size="sm">Sign-Up and Start Learning!</Heading>
      ) : (
        <Heading size="sm">Log-In to Your Udemy Account</Heading>
      )}

      <Divider my="1rem" />

      {!isSignUp && (
        <Box mb={3}>
          <ButtonSocialLogin
            provider="google"
            onSuccess={_onSuccess}
            onFailure={_onFailure}
          />
        </Box>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        {isSignUp && (
          <FormControl mb={2} isInvalid={errors.email}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={FaEnvelope} color="gray.400" />}
              />
              <Input
                {...register('email', emailValidate)}
                placeholder="Email"
                rounded="sm"
              />
            </InputGroup>
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
        )}

        <FormControl mb={2} isInvalid={errors.username}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaUserAlt} color="gray.400" />}
            />
            <Input
              {...register('username', usernameValidate)}
              placeholder="User Name"
              rounded="sm"
            />
          </InputGroup>
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>

        <FormControl mb={2} isInvalid={errors.password}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaLock} color="gray.400" />}
            />
            <Input
              {...register('password', isSignUp && passwordValidate)}
              type="password"
              placeholder="Password"
              rounded="sm"
            />
          </InputGroup>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <FormControl as="fieldset" mb={4}>
          {isSignUp ? (
            <Checkbox
              {...register('rememberMe')}
              size="sm"
              color="gray.700"
              alignItems="baseline"
            >
              I agree to your Term of Use and Privacy Policy
            </Checkbox>
          ) : (
            <Checkbox {...register('rememberMe')} size="sm" color="gray.700">
              Remember me?
            </Checkbox>
          )}
        </FormControl>

        <Button type="submit" colorScheme="red" w="full" rounded="sm">
          {isSignUp ? 'Sign Up' : 'Log In'}
        </Button>
      </form>

      <Text textAlign="center" mt={4}>
        or <Link color="blue.300">Forgot Password</Link>
      </Text>

      <Divider my="1rem" />

      {isSignUp ? (
        <Text textAlign="center" mt={5}>
          Already have an account?{' '}
          <Link href="/login" color="blue.400">
            Log In
          </Link>
        </Text>
      ) : (
        <Text textAlign="center" mt={5}>
          Don't have an account?{' '}
          <Link href="/signup" color="blue.400">
            Sign up
          </Link>
        </Text>
      )}
    </Container>
  );
}

export default Authentication;
