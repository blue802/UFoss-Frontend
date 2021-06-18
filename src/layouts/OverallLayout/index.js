import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { Container } from '@chakra-ui/react';

const index = props => {
  return (
    <Router>
      <Header />
      <Container maxW="container.2xl" overflow="hidden" mt="5rem">
        {props.children}
      </Container>
      <Footer />
    </Router>
  );
};

index.propTypes = {
  children: PropTypes.element,
};

export default index;
