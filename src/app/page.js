import React from 'react';
import Header from './components/header.js'
import { Box } from '@mui/material';  

export default function Home() {
  return (
    <Box
        sx = {
          {
            bgcolor:'white',
            height: '100vh',  // Full viewport height
            width: '100vw',   // Full viewport width
            margin: 0,        // Remove default margin
            padding: 0,       // Remove default padding
            }} >

      <Header>
      </Header>
    </Box>
    
  );
}