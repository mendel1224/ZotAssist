import React from 'react';
import Header from './components/Header/Header.js'
import StudentTips from './StudentTips.js';
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
      <StudentTips> 
      </StudentTips>
    </Box>
    
  );
}