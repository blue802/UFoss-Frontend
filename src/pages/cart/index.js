import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Flex, Box, Text, Container, Heading } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';


import { removeItemCart, removeAllCart } from '../../store/cart/cartSlice';
import CartItem from './components/CartItem';
import CheckoutForm from './components/CheckoutForm';
import Paypal from './components/paypal';
import { useAuth } from '../../services/auth.service'
import API from "../../utils/API"
import useCustomToast from "../../hooks/useCustomToast"
function CartPage() {
  let history = useHistory();
  const toast = useCustomToast();
  const dispatch = useDispatch();
  const carts = useSelector(state => state.carts);
  const [listCarts, setListCarts] = useState(carts);
  const [totalAmount, setTotalAmount] = useState(0);
  const [checkout, setCheckout] = useState(false);
  const [profile] = useAuth();
  console.log("profile", profile)
  const [dataSubmitCart, setDataSubmitCart] = useState({
    userId: "",
    courId: [
    ]
  })

  useEffect(() => {
    setDataSubmitCart({
      userId: profile.id,
      courId: listCarts.map(cart => cart.id)
    })
  }, [profile, listCarts]);
  const handleRemoveCartItems = val => {
    const newCart = listCarts.filter(cart => cart.id !== val.id);
    setListCarts(newCart);
    dispatch(removeItemCart(val))
  };

  const handleRenderItemCart = () => {
    return listCarts.map(itemCart => (
      <CartItem
        handleRemoveCartItems={handleRemoveCartItems}
        itemCart={itemCart}
      />
    ));
  };

  const handleSumPrice = () => {
    const sum = listCarts.reduce((total, itemCarts) => {
      return total + itemCarts.price;
    }, 0);
    setTotalAmount(sum);
  };

  const handleCheckout = async () => {
    try {
      await API.post(`/payments`, dataSubmitCart).then(res => {
      }).catch(err => console.log(err))
    } catch {
      console.log("err");
    }
    setCheckout(!checkout);
  };
  const handleCleanCart = () => {
    dispatch(removeAllCart([]));
    setCheckout(false);
    toast({ title: 'Payment success', status: 'success' });
    history.push("/");
  };
  useEffect(() => {
    handleSumPrice();
  }, [listCarts]);

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
                {listCarts.length} Courses in Cart
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
