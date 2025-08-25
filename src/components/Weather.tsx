import React, { useState, useEffect } from 'react';

const Weather: React.FC = () => {
  const [temperature, setTemperature] = useState<number | null>(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=23.25&longitude=77.41&current_weather=true');
      const data = await response.json();
      setTemperature(data.current_weather.temperature);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  useEffect(() => {
    fetchWeather();
    const intervalId = setInterval(fetchWeather, 30 * 60 * 1000); // Fetch every 30 minutes

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="weather-widget">
      {temperature !== null ? (
        <p>{`Madhya Pradesh: ${temperature}°C`}</p>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default Weather;