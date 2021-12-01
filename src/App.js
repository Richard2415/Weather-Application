import React, { useState } from "react";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import axios from "axios";

const API_KEY = "a945f36155f7780fe6f35c059a555727";

export const WeatherIcons = {
  "01d": "/icon/sunny.svg",
  "01n": "/icon/night.svg",
  "02d": "/icon/day.svg",
  "02n": "/icon/cloudy-night.svg",
  "03d": "/icon/cloudy.svg",
  "03n": "/icon/cloudy.svg",
  "04d": "/icon/perfect-day.svg",
  "04n": "/icon/cloudy-night.svg",
  "09d": "/icon/rain.svg",
  "09n": "/icon/rain-night.svg",
  "10d": "/icon/rain.svg",
  "10n": "/icon/rain-night.svg",
  "11d": "/icon/storm.svg",
  "11n": "/icon/storm.svg",
};

const Container = styled.div`
display: flex;
flex-direction: column;
margin: auto;
align-items: center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius:4px;
width: 300px;
background: white;
font-family: 'Estonia', cursive;
font-family: 'Poppins', sans-serif;
font-family: 'Shippori Antique B1', sans-serif;
`;

const AppLabel = styled.span`
color:black;
font-size: 18px;
font-weight: bold;
`


function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

 const fetchWeather = async (e) => {
  e.preventDefault();
  const response = 
  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
updateWeather(response.data);
};
  return (
    <Container>
    <AppLabel>Weather Application</AppLabel>
    {city && weather ? (
    <WeatherComponent weather={weather} city={city}/>
    ) : (
    <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
    )}
     </Container>
  );
}

export default App;
