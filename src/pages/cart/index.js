import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Container, Heading } from '@chakra-ui/react';

import CartItem from './components/CartItem';
import CheckoutForm from './components/CheckoutForm';
import morkData from '../../course-dummy.json';
import Paypal from './components/Paypal';

function CartPage() {
  const [itemCarts, setItemCarts] = useState(morkData);
  const [totalAmount, setTotalAmount] = useState(0);
  const [checkout, setCheckout] = useState(false);

  const handleRemoveCartItems = _id => {
    const newCartItems = itemCarts.filter(item => item.id !== _id);
    setItemCarts(newCartItems);
  };

  const handleRenderItemCart = () => {
    return itemCarts.map(itemCart => (
      <CartItem
        handleRemoveCartItems={handleRemoveCartItems}
        itemCart={itemCart}
      />
    ));
  };

  const handleSumPrice = () => {
    const sum = itemCarts.reduce((total, itemCarts) => {
      return total + itemCarts.price;
    }, 0);
    setTotalAmount(sum);
  };

  const handleCheckout = () => {
    setCheckout(!checkout);
  };
  const handleCleanCart = () => {
    setItemCarts([]);
    setCheckout(false);
  };
  useEffect(() => {
    handleSumPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemCarts]);

  return (
    <Box mt="64px" minH="90vh">
      <Box w="full" bgColor="black">
        <Container
          maxW={[
            'container.sm',
            'container.sm',
            'container.md',
            'container.lg',
          ]}
          py="16"
          color="white"
        >
          <Heading
            as="h4"
            color="white"
            fontSize={['4xl', '5xl', '5xl']}
            fontWeight="medium"
          >
            Shopping Cart
          </Heading>
        </Container>
      </Box>
      <Container
        maxW={['container.sm', 'container.sm', 'container.md', 'container.lg']}
        py="16"
        color="white"
      >
        <Flex w="full" direction={['column-reverse', 'column-reverse', 'row']}>
          {/* Total item checkout */}
          <Box w={['full', 'full', 2 / 3]}>
            <Box>
              <Text fontSize="18px" fontWeight="400" color="#29303B">
                {' '}
                {itemCarts.length} Courses in Cart
              </Text>
            </Box>
            <Flex direction="column">
              <Box>
                <Flex direction="column">{handleRenderItemCart()}</Flex>
              </Box>
            </Flex>
          </Box>

          {/* Toltal price */}
          <Box
            w={['full', 'full', 1 / 3]}
            ml={['0', '0', '5']}
            mb={['5', '5', '0']}
          >
            {checkout ? (
              <Paypal
                totalAmount={totalAmount}
                handleCleanCart={handleCleanCart}
              />
            ) : (
              <CheckoutForm
                totalAmount={totalAmount}
                handleCheckout={handleCheckout}
              />
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default CartPage;
