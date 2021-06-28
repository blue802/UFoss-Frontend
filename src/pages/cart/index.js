import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Text,
  useMediaQuery
}
  from '@chakra-ui/react';
import CartItem from './components/CartItem';
import CheckoutForm from './components/CheckoutForm';
import morkData from '../../mock-data.json';
function Cart() {

  const [largeScreen] = useMediaQuery('(min-width:1024px)');
  const [itemCarts, setItemCarts] = useState(morkData);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleRemoveCartItems = (_id) => {
    const newCartItems = itemCarts.filter(item => item.id !== _id)
    setItemCarts(newCartItems);
  }

  const handleRenderItemcCart = () => {
    return itemCarts.map(itemCart => <CartItem handleRemoveCartItems={handleRemoveCartItems} itemCart={itemCart} />)
  }

  const handleSumPrice = () => {
    const sum = itemCarts.reduce((total, itemCarts) => {
      return total + itemCarts.price
    }, 0)
    setTotalAmount(sum)
  }

  useEffect(() => {
    handleSumPrice();
  }, [itemCarts])

  return (
    <Flex direction='column'>
      <Box w='100%' bg='#000'>
        <Box w={largeScreen ? '70%' : '90%'} margin='0 auto' py='40px'>
          <Text color='#fff' fontSize='30px' fontWeight='400'>Shoping Cart</Text>
        </Box>
      </Box>
      <Box w={largeScreen ? '70%' : '90%'} paddingTop='50px' margin='auto'>
        <Flex direction={largeScreen ? 'row' : 'column-reverse'}>
          {/* Total item checkout */}
          <Box width={largeScreen ? '65%' : '100%'}>
            <Box >
              <Text fontSize='18px' fontWeight='400' lineHeight='1.2' color='#29303B'> {itemCarts.length} Course in Cart</Text>
            </Box>
            <Flex direction='column'>
              <Box>
                <Flex direction='column'>
                  {handleRenderItemcCart()}
                </Flex>
              </Box>
            </Flex>
          </Box>

          {/* Toltal price */}
          <Box width={largeScreen ? '35%' : '100%'} padding={largeScreen ? '2rem' : "0 0 2rem 0"}>
            <CheckoutForm totalAmount={totalAmount} />
          </Box>
        </Flex>
      </Box >
    </Flex >

  )
}

export default Cart;
