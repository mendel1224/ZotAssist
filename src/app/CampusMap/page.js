"use client"; 

import React from "react";
import { Box, Typography } from "@mui/material";

const CampusMap = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white", // White background
        color: "black", // Black text
        textAlign: "center",
        minHeight: "100vh", // Full screen height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: 2,
          fontWeight: "bold",
        }}
      >
        UC Irvine Campus Map
      </Typography>
      <Box
        sx={{
          width: "90%", // Adjust the size of the map
          height: "500px", // Adjust the height
          border: "1px solid #ccc", // border styling
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13104.09130776974!2d-117.844296!3d33.641204!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdbadbe8e6533%3A0x9ae58e59bbcd6317!2sUniversity%20of%20California%2C%20Irvine!5e0!3m2!1sen!2sus!4v1700721526525!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

export default CampusMap;
