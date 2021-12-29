import { Box } from '@mui/material';
import React from 'react';

import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Box sx={{
      width: "80%",
      margin: "20px auto"
    }}>
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
