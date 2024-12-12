"use client"; // Add this line to mark the component as a client component
import React from "react";
import {
  Avatar,
  Box,
  Typography,
  Card,
  Grid,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MapIcon from "@mui/icons-material/Map";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useRouter } from "next/navigation";

const DashBoard = () => {
  const router = useRouter(); // Initialize Next.js router

  const cardData = [
    { title: "To-Do List", icon: <AssignmentIcon />, route: "/ToDoList" },
    { title: "Campus Map", icon: <MapIcon />, route: "/CampusMap" },
    { title: "Weather", icon: <WbSunnyIcon />, route: "/Weather" },
  ];

  return (
    <Grid
      container
      spacing={4} // Increase spacing for more room between items
      justifyContent="center"
    >
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              textAlign: "center",
              boxShadow: 3,
              borderRadius: 3,
              padding: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 150, // Adjust card width
              minHeight: 120, // Adjust card height
              margin: "auto", // Center the cards
              cursor: "pointer", // Make the card look clickable
            }}
            onClick={() => router.push(card.route)} // Navigate to the route
          >
            {/* Icon */}
            <Box sx={{ marginBottom: 1 }}>{card.icon}</Box>
            {/* Title */}
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              {card.title}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashBoard;
