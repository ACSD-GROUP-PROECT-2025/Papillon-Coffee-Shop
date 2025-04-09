import { useState } from 'react';
import axios from 'axios';

function Weather() {
  const [weather, setWeather] = useState('');
  const [temperature, setTemperature] = useState('');
  const [pressure, setPressure] = useState('');
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  function handleSearchQuery(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }

  async function searchWeather(e) {
    e.preventDefault();
    var response;
    setError('');
    try {
      response = await axios.get('https://api.weatherbit.io/v2.0/current', {
        params: {
          city: query,
          key: "6658f27d36e943118e7a74ab212d2ed1" // replaced with my Weatherbit API key
        }
      });
      setTemperature(response.data.data[0].temp);
      setWeather(response.data.data[0].weather.description);
      setPressure(response.data.data[0].pres);
    } catch (e) {
      if (e.response.status === 404) {
        setError(`Weather data for ${query.toUpperCase()} could not be found`);
      } else if (!query) {
        setError("Please type a city name");
      } else {
        setError("The weather data could not be retrieved. Please try again later and make sure you are connected to the internet");
      }
      setWeather('');
    }
  }

  if (weather) {
    return (
      <div>
        <h1>Type a city name</h1>
        <input value={query} name="query" onChange={handleSearchQuery} />
        <button onClick={searchWeather}>Search</button>
        <br />
        <h3>{weather}</h3>
        <h4>Temperature: {temperature}°C</h4>
        <h4>Pressure: {pressure} hPa</h4>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h1>Type a city name</h1>
        <input value={query} name="query" onChange={handleSearchQuery} />
        <button onClick={searchWeather}>Search</button>
        <h3>{error}</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Type a city name</h1>
        <input value={query} name="query" onChange={handleSearchQuery} />
        <button onClick={searchWeather}>Search</button>
      </div>
    );
  }
}

export default Weather;
