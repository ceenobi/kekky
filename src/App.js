import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Navbar from './component/Navbar/Navbar';
import {Login,Register, Home, Dashboard} from './component'
import PrivateRoutes from './container/protectedRoutes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Grid p={3}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route element={<PrivateRoutes />}>
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
