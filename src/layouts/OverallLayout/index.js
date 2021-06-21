import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import { Container } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

const OverallLayout = props => {
  const location = useLocation();

  if (location.pathname === '/notFound') {
    return <Fragment>{props.children}</Fragment>;
  }

  return (
    <Fragment>
      <Header />
      <Container maxW="container.2xl" mt="10vh" minH="90vh">
        {props.children}
      </Container>
      <Footer />
    </Fragment>
  );
};

OverallLayout.propTypes = {
  children: PropTypes.element,
};

export default OverallLayout;
