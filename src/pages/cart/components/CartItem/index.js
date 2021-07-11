import React from 'react';
import { Box, Flex, Icon, Text, Image } from '@chakra-ui/react';
import { BsFillTagFill } from 'react-icons/bs';
import LinesEllipsis from 'react-lines-ellipsis';

function CartItem(props) {
  const { item, handleRemoveCartItems } = props;
  const { title, imageURL, instructor, price } = item;

  return (
    <Box
      padding="10px"
      borderWidth="2px"
      borderColor="#F4F5F5"
      marginBottom="10px"
    >
      <Flex direction="row">
        <Box width="70%">
          <Flex direction="row">
            <Box marginRight="10px">
              <Image
                src={imageURL}
                alt="image of course"
                maxWidth="130px"
                height="auto"
              />
            </Box>

            <Box>
              <Text fontSize="15px" fontWeight="700" color="#29303b">
                <LinesEllipsis text={title} maxLine={2} />
              </Text>
              <Text
                fontSize="13px"
                fontWeight="400"
                color="#686f7a"
              >{`${instructor?.firstName} ${instructor?.lastName} `}</Text>
            </Box>
          </Flex>
        </Box>

        <Box width="15%" onClick={() => handleRemoveCartItems(item)}>
          <Text
            fontSize="13px"
            fontWeight="400"
            color="#007791"
            cursor="pointer"
          >
            Remove
          </Text>
        </Box>

        <Box width="15%">
          <Flex>
            <Text
              paddingTop="2px"
              fontSize="15px"
              fontWeight="700"
              color="#ec5252"
              margin="0 0 0 auto"
            >
              ${price}
            </Text>
            <Box marginLeft="5px">
              <Icon as={BsFillTagFill} color="#ec5252" width="15px" />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default CartItem;
