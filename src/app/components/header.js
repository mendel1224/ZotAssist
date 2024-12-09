import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';

const Header = () => {
    return (

    <Box 
    sx = 
    {{
        display: 'flex',
        alignItems: 'center',
        gap: 5

    }} 
    >
    <Avatar alt = "profile icon"  />

   <Box 
   sx = {{ 
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: 2, // Vertical margin
   }}>


    <Typography variant = "h4" align = "left" color = "black">
        Welcome, UCI Student!
    </Typography>       
    <Typography variant  = "subtitile1" align = "left" color = "black">
        Stay organized and on track!
    </Typography>
    </Box>
</Box>
);
}

export default Header;