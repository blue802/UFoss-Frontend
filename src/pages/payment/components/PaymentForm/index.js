import React from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Text,
  Spacer,
  NumberInput,
  NumberInputField,
  Checkbox
} from '@chakra-ui/react'
function PaymentForm(props) {
  const { isTypePayment, errors, register } = props
  const namecardValidate = {
    required: 'Name on card is required.',
  }

  const numbercardValidate = {
    required: 'Name on card is required.',
  }

  const timeValidate = {
    required: 'Name on card is required',
  }

  const zipCodeValidate = {
    required: 'Name on card is required',
  }

  const securytiValidate = {
    required: 'Name on card is required',
  }
  return (
    <Flex direction='column'>
      {/* form card payment */}
      {isTypePayment === 'paymentCard' ? <Box bg='#F8F8F9' padding='30px'>
        <Flex direction='column'>
          <Box marginBottom='10px'>
            <FormControl id='name-card' isInvalid={errors.nameCard}>
              <FormLabel>Name on Cart</FormLabel>
              <Input
                {...register('nameCard', namecardValidate)}
                placeholder='Name on Cart' />
              <FormErrorMessage>{errors.nameCard?.message}</FormErrorMessage>
            </FormControl>
          </Box>

          <Box marginBottom='10px'>
            <FormControl id='card-number' isInvalid={errors.numberCard}>
              <FormLabel>Card Number</FormLabel>
              <NumberInput
                placeholder='Number on Card'

              >
                <NumberInputField {...register('numberCard', numbercardValidate)} />
              </NumberInput>
              <FormErrorMessage>{errors.numberCard?.message}</FormErrorMessage>
            </FormControl>
          </Box>

          <Box marginBottom='10px'>
            <Flex direction='row'>
              <FormControl id='mm-dd' width='48%' isInvalid={errors.timeMMDD}>
                <FormLabel>MM/DD</FormLabel>
                <Input
                  {...register('timeMMDD', timeValidate)}
                  placeholder='MM/DD' />
                <FormErrorMessage>{errors.timeMMDD?.message}</FormErrorMessage>
              </FormControl>

              <Spacer />

              <FormControl id='security-code' width='48%' isInvalid={errors.securityCode}>
                <FormLabel>Security Code</FormLabel>
                <Input
                  {...register('securityCode', securytiValidate)}
                  placeholder='Security Code' />
                <FormErrorMessage>{errors.securityCode?.message}</FormErrorMessage>
              </FormControl>
            </Flex>
          </Box>

          <Box marginBottom='10px'>
            <FormControl id='zip-code' width='48%' isInvalid={errors.zipCode}>
              <FormLabel>Zip/Postal Code</FormLabel>
              <Input
                {...register('zipCode', zipCodeValidate)}
                placeholder='Zip/Postal Code' />
              <FormErrorMessage>{errors.zipCode?.message}</FormErrorMessage>
            </FormControl>
          </Box>

          <Box marginTop='30px'>
            <Checkbox>Remember this card</Checkbox>
          </Box>

        </Flex>
      </Box> :
        <Box bg='#F8F8F9' padding='30px'>
          <Text fontSize='15px' color='#29303b'>In order to complete your transaction, we will transfer you over to PayPal's secure servers.</Text>
        </Box>}
    </Flex>
  )
}

export default PaymentForm;
