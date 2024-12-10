"use client"; // Add this line to mark the component as a client component
import React from 'react';
import {Avatar, Box, Typography, Card, CardContent, Grid  } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MapIcon from '@mui/icons-material/Map';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import { useRouter } from 'next/navigation'; 



const DashBoard = () => {

  const router = useRouter(); // Initialize Next.js router

    const cardData = [

        { title: "To-Do List" , icon:  <AssignmentIcon />  , route: '/ToDoList'} ,
        { title: "Calender", icon: <CalendarMonthIcon /> },
        { title: "Campus Map", icon: <MapIcon/>  } ,
        { title: "Weather", icon: <WbSunnyIcon/> } ,
        { title: "Time", icon: <AccessTimeIcon/> }

]

    

    return (
        <Grid container spacing={7} justifyContent="align-start">
        {cardData.map((card, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Card
              sx={{
                textAlign: 'center',
                boxShadow: 2,
                borderRadius: 2,
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                //Sizing
                minWidth: 150, // Set a consistent width
                minHeight: 100, // Set a consistent height
                cursor: 'pointer', // Make the card look clickable

              }}
              onClick={() => router.push(card.route)} // Navigate to the route
            >
              {/* Icon */}
              {card.icon}
              {/* Title */}
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                {card.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>



    )
}

export default DashBoard;