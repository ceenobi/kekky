import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar/Navbar';
import routes from './routes'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Grid p={3}>
          <Navbar />
          <Routes>
            {routes.map((route, i) => {
              return (
                <Route key={i} path={route.path} element={<route.element />} />
              );
            })}
          </Routes>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
