import React from 'react';
import { Box, Image, Flex, Text, Spacer } from '@chakra-ui/react'
function OrderDetailItem() {
  return (
    <Box padding='10px 0'>
      <Flex direction='row'>
        <Box>
          <Image src='' href='order-detail' w='32px' h='32px' />
        </Box>
        <Box marginLeft='10px' >
          <Text fontSize='14px' fontWeight='700' color='#29303b' >Life Coaching Certification Course (Beginner to Advanced)</Text>
        </Box>
        <Spacer />
        <Box>
          <Text fontSize='15px' fontWeight='500' color='#29303B' >13.99$</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default OrderDetailItem;
