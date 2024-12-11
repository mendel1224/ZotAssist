"use client"; 

import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Open-Meteo API URL for Irvine, California
        const url =
          "https://api.open-meteo.com/v1/forecast?latitude=33.6846&longitude=-117.8265&current_weather=true";

        const response = await axios.get(url);
        setWeather(response.data.current_weather);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch weather data");
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
  const kmhToMph = (kmh) => kmh * 0.621371;

  const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case 0: // Clear sky
        return <WbSunnyIcon sx={{ fontSize: 100, color: "gold" }} />;
      case 1: // Mainly clear
      case 2: // Partly cloudy
        return <CloudIcon sx={{ fontSize: 100, color: "gray" }} />;
      case 3: // Overcast
        return <CloudIcon sx={{ fontSize: 100, color: "darkgray" }} />;
      case 45: // Fog
        return <CloudIcon sx={{ fontSize: 100, color: "lightgray" }} />;
      case 51: // Light drizzle
      case 53: // Moderate drizzle
      case 55: // Dense drizzle
      case 80: // Rain showers
      case 81: // Heavy rain showers
      case 82: // Violent rain showers
        return <ThunderstormIcon sx={{ fontSize: 100, color: "blue" }} />;
      case 71: // Light snow showers
      case 73: // Moderate snow showers
      case 75: // Heavy snow showers
        return <AcUnitIcon sx={{ fontSize: 100, color: "lightblue" }} />;
      default:
        return <Typography>Unknown Weather</Typography>;
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box sx={{ textAlign: "center", marginTop: 4 }}>
      <Typography variant="h4">Current Weather in Irvine</Typography>
      <Box sx={{ marginTop: 2 }}>{getWeatherIcon(weather.weathercode)}</Box>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        Temperature: {celsiusToFahrenheit(weather.temperature).toFixed(1)}°F
      </Typography>
      <Typography variant="body1">
        Wind Speed: {kmhToMph(weather.windspeed).toFixed(1)} mph
      </Typography>
     {/* <Typography variant="body1">
        Weather Code: {weather.weathercode}
      </Typography>
     */}
    </Box>
  );
};

export default Weather;
