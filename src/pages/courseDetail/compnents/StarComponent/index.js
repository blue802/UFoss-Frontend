import React from 'react';
import { Box, Icon } from '@chakra-ui/react'
import { BsFillStarFill } from 'react-icons/bs';
function Star() {
  return (
    <Box margin='0 5px'>
      <Icon as={BsFillStarFill} fontSize='14px' fontWeight='700' color='#AE8863' />
    </Box>
  )
}

export default Star;