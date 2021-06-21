import React from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { AiOutlinePlaySquare } from 'react-icons/ai';
function InforCourse() {
  return (
    <Box padding='4px 0'>
      <Flex >
        <Box ><Icon as={AiOutlinePlaySquare} /></Box>
        <Text marginLeft='10px' fontSize='14px' color='#3c3b37' paddingTop='3px'>22 hours on-demand video</Text>
      </Flex>
    </Box>
  )
}

export default InforCourse;
