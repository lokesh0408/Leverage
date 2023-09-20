import React, { useEffect, useState } from 'react';
import './weather.css';
import Navbar from './Navbar';

const Weather = () => {
  const [forecastData, setForecastData] = useState(null);
  const [search, setSearch] = useState('Pune');

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const apiKey = 'e0cab07ac5a629b743f344c34b50f57e';
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${apiKey}&units=metric`);
        
        if (response.ok) {
          const data = await response.json();
          setForecastData(data);
        } else {
          console.error('Failed to fetch forecast data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchForecastData();
  }, [search]);

  return (
    <>
    <Navbar/>
    <div className="box">
      <div className="inputdata">
        <input
          type="search"
          className="inputf"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      {forecastData ? (
        <div className="forecast">
          {forecastData.list.map((forecastItem, index) => {
            // Extract relevant data from forecastItem
            const date = new Date(forecastItem.dt * 1000);
            const temperature = forecastItem.main.temp;
            const weatherDescription = forecastItem.weather[0].description;
            const weatherIcon = `https://openweathermap.org/img/w/${forecastItem.weather[0].icon}.png`;

            // Display data for the next 5 days
            if (index % 8 === 0) { // Data is available for every 3 hours, so we select every 24 hours (8 * 3)
              return (
                <div key={index} className="forecast-item">
                  <div className="forecast-content">
                    <h2 className="location">
                      {search}
                    </h2>
                    <h3 className="date">
                      {date.toLocaleDateString()}
                    </h3>
                    <img src={weatherIcon} alt="Weather Icon" className="weather-icon" />
                    <p className="temperature">Temperature: {temperature}°C</p>
                    <p className="weather-description">Weather: {weatherDescription}</p>
                  </div>
                </div>
              );
            } else {
              return null; // Skip items that are not part of the 5-day forecast
            }
          })}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
};

export default Weather;
