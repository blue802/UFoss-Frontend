import React from 'react';
import {
  Flex,
  Box,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Select,
  RadioGroup,
  Radio,
  Stack,
  Image,
  Input,
  NumberInputField,
  NumberInput,
  Spacer,
  Checkbox,
  Button
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import iconPaypal from '../../assets/images/iconPaypal.jpg';
import OrderDetailItem from './components/OrderdetailItem';
function Payment() {
  const [isTypePayment, setIsTypePayment] = React.useState('paymentCard');
  const [isNotSmallScreen] = useMediaQuery('(min-width: 768px)');
  return (
    <Box w={isNotSmallScreen ? "80%" : "60%"} margin='0 auto' paddingTop='60px'>
      <Flex direction={isNotSmallScreen ? "row" : " column"}>
        {/* Checkout */}
        <Box width={isNotSmallScreen ? "60%" : '100%'} padding='30px'>
          <Flex direction='column'>
            <Box paddingBottom='16px'>
              <Heading fontSize='24px' fontWeight='700'>
                Checkout
              </Heading>
            </Box>

            <Box >
              <Text>
                Billing Address
              </Text>
            </Box>

            <Box>
              <FormControl id="country" >
                <FormLabel>Country</FormLabel>
                <Select placeholder="Select country" width='50%'>
                  {/* api coutry */}
                  <option>United Arab Emirates</option>
                  <option>Nigeria</option>
                </Select>
              </FormControl>
            </Box>

            <Box>
              <RadioGroup onChange={setIsTypePayment} value={isTypePayment}>
                <Stack direction='column' margin='10px 0px'>
                  <Radio value='paymentCard' margin='10px 0px'>New Payment Cart</Radio>
                  <Radio value='payal' margin='10px 0px'>
                    <Box>
                      <Flex direction='row'>Payal <Image src={iconPaypal} alt='paypal' padding='3px 0 0 10px' width='74px' height='23px' /></Flex>
                    </Box>
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>

            <Box widtd='100%' borderWidth='1px' borderColor='#DEDFE0'>
              <Flex direction='column'>
                {/* form card payment */}
                {isTypePayment === "paymentCard" ? <Box bg='#F8F8F9' padding='30px'>
                  <Flex direction='column'>
                    <Box marginBottom='10px'>
                      <FormControl id="name-card" isRequired>
                        <FormLabel>Name on Cart</FormLabel>
                        <Input placeholder="Name on Cart" />
                      </FormControl>
                    </Box>

                    <Box marginBottom='10px'>
                      <FormControl id="card-number" isRequired>
                        <FormLabel>Card Number</FormLabel>
                        <NumberInput>
                          <NumberInputField />
                        </NumberInput>
                      </FormControl>
                    </Box>

                    <Box marginBottom='10px'>
                      <Flex direction='row'>
                        <FormControl id="mm-dd" isRequired width='48%'>
                          <FormLabel>MM/DD</FormLabel>
                          <Input placeholder="MM/DD" />
                        </FormControl>
                        <Spacer />
                        <FormControl id="security-code" isRequired width='48%'>
                          <FormLabel>Security Code</FormLabel>
                          <Input placeholder="Security Code" />
                        </FormControl>
                      </Flex>
                    </Box>

                    <Box marginBottom='10px'>
                      <FormControl id="zip-code" isRequired width='48%'>
                        <FormLabel>Zip/Postal Code</FormLabel>
                        <Input placeholder="Zip/Postal Code" />
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
            </Box>

            {/* Order detail */}
            <Box>
              <Flex direction='column'>

                <Box margin='16px 0 32px 0'>
                  <Text fontsize='240x' fontWeight='700' color='#29303B'>Order Detail</Text>
                </Box>

                {/* Order detail item */}
                <OrderDetailItem />
                <OrderDetailItem />
              </Flex>
            </Box>
          </Flex>
        </Box>

        {/* Summary */}
        <Box w={isNotSmallScreen ? "40%" : '100%'} padding='20px' borderWidth='2px' borderColor='#E7E7E8'>
          <Flex direction='column'>

            <Box paddingBottom='16px'>
              <Text fontSize='24px' fontWeight='700' color='#29303b' >Summary</Text>
            </Box>

            <Box w='100%' h='2px' bg='#CACBCC'></Box>

            <Box marginTop='10px'>
              <Flex direction='row'>
                <Box marginBottom='8px'>
                  <Text fontSize='16px' fontWeight='700' color='#293038'>Total: </Text>
                </Box>
                <Spacer />
                <Box>
                  <Text fontSize='16px' fontWeight='700' color='#293038'>$11.99</Text>
                </Box>
              </Flex>
            </Box>

            <Box>
              <Text fontSize='12px' color='#29303'>
                Udemy is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.
              </Text>
            </Box>

            <Box marginTop='10px'>
              <Button bg='#EC5252' color='#fff' size="md" w='100%'>Complete payment</Button>
            </Box>
          </Flex>
        </Box>
      </Flex >
    </Box >
  )
}

export default Payment;
