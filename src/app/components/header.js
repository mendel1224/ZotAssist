import React from 'react';
import { Avatar, Box, Typography, Card, CardContent } from '@mui/material';
import DashBoard from './DashBoard';



const Header = () => {
    return (

<Box 
    sx = 
    {{
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        alignItems: 'flex-start',
        gap: 2,
        paddingLeft: 2,
        //marginTop: 0, // Vertical margin

    }} 
    >
   
<Box 
   sx = {{ 
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: 2 , // Vertical margin
   }}
   >
    <Avatar alt = "profile icon"  />

    <Typography variant = "h4" align = "left" color = "black" marginTop={2}>
        Welcome, UCI Student!
    </Typography>       
    <Typography variant  = "subtitle1" align = "left" color = "black">
        Stay organized and on track!
    </Typography>
    </Box>
  
 <Box 
 sx = 
   {{
    display: 'flex',
    alignItems: 'flex-start',
   }}
   >
   <DashBoard />
   </Box>
</Box>
);
}

export default Header;