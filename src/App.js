import React from 'react';
import { Container } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Authentication from './pages/auth';

function App() {
  return (
    <Router>
      <Container>
        <Authentication />
      </Container>
    </Router>
  );
}

export default App;
