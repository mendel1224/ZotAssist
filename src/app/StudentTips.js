"use client"; // Mark this as a client component

import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

const StudentTips = () => {
  // Tips for college students
  const tips = [
    "Stay organized by using a planner or digital calendar.",
    "Make time for self-care and get enough sleep.",
    "Join campus clubs or organizations to network and make friends.",
    "Visit professors during office hours to build relationships and get help.",
    "Use your university’s resources, such as tutoring centers or career services.",
  ];

  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  // Function to go to the next tip
  const handleNextTip = () => {
    setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
  };

  // Function to go to the previous tip
  const handlePreviousTip = () => {
    setCurrentTipIndex((prevIndex) =>
      prevIndex === 0 ? tips.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: 4,
        backgroundColor: "white",
        minHeight: "100vh",
      }}
    >
     
      {/* Tip Card */}
      <Card
        sx={{
          maxWidth: 600,
          margin: "0 auto",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Helpful Tip
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            {tips[currentTipIndex]}
          </Typography>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Box sx={{ marginTop: 4, display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          sx={{ marginRight: 2 }}
          onClick={handlePreviousTip}
        >
          Previous Tip
        </Button>
        <Button variant="contained" onClick={handleNextTip}>
          Next Tip
        </Button>
      </Box>
    </Box>
  );
};

export default StudentTips;
