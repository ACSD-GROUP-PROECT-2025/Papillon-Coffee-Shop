import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css"; // Ensure styling is included

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = "f74dd412f047f5ecb234ae028d69ae5d";
  const LAT = 53.350379943847656; // Dublin Latitude
  const LON = -6.266560077667236; // Dublin Longitude

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat: LAT,
          lon: LON,
          units: "metric",
          appid: API_KEY,
        },
      })
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setError("Failed to load weather data.");
        setLoading(false);
      });
  },[] ); 

  return (
    
  <div class="columnx1">
    <div className="weather-widget">
      <h2 style={{marginTop: "-50px" }} >🌤 Weather at Papillon Café</h2>
      {loading ? (
        <p>Loading weather data...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <h3>{weather?.weather[0]?.description} | {weather?.main?.temp}°C</h3>
          
     )}<h3>Looks like perfect coffee weather!</h3>   
    </div></div>
  );
};

export default WeatherWidget;