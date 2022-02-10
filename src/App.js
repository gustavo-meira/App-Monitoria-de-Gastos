import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './Routes';
import OutlaysProvider from './contexts/OutlaysProvider';

const App = () => (
  <ChakraProvider>
    <OutlaysProvider>
      <Routes />
    </OutlaysProvider>
  </ChakraProvider>
);

export default App;
