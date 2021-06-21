import React from 'react';
import { Box, Flex, Text, Spacer } from '@chakra-ui/react'
import { FiPlayCircle } from "react-icons/fi"
function Lesson() {
  return (
    <Box borderWidth='1px' borderColor='#DCDACB' padding='10px' cursor='pointer'>
      <Flex>
        <Box paddingTop='3px' paddingRight='10px'>
          <FiPlayCircle />
        </Box>
        <Text fontSize='16px' color='#3c3b37' fontWeight='900'>Auto-Welcome Message</Text>
        <Spacer />
        <Box>
          <Flex>
            <Text marginRight="10px">Preview</Text>
            <Text>5: 33</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Lesson;
