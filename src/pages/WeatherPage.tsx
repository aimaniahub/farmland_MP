import React, { useState, useEffect } from 'react';

interface WeatherData {
  date: string;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy';
  temperature: number;
  humidity: number;
  precipitation: number;
  windSpeed: number;
}

const WeatherPage: React.FC = () => {
  const [location, setLocation] = useState('Farm Location');
  const [currentWeather, setCurrentWeather] = useState<WeatherData>({
    date: new Date().toLocaleDateString(),
    condition: 'sunny',
    temperature: 24,
    humidity: 65,
    precipitation: 0,
    windSpeed: 8,
  });

  const [forecast, setForecast] = useState<WeatherData[]>([
    {
      date: new Date(Date.now() + 86400000).toLocaleDateString(),
      condition: 'cloudy',
      temperature: 22,
      humidity: 70,
      precipitation: 20,
      windSpeed: 10,
    },
    {
      date: new Date(Date.now() + 172800000).toLocaleDateString(),
      condition: 'rainy',
      temperature: 19,
      humidity: 85,
      precipitation: 60,
      windSpeed: 15,
    },
    {
      date: new Date(Date.now() + 259200000).toLocaleDateString(),
      condition: 'cloudy',
      temperature: 21,
      humidity: 75,
      precipitation: 30,
      windSpeed: 12,
    },
    {
      date: new Date(Date.now() + 345600000).toLocaleDateString(),
      condition: 'sunny',
      temperature: 26,
      humidity: 60,
      precipitation: 0,
      windSpeed: 7,
    },
    {
      date: new Date(Date.now() + 432000000).toLocaleDateString(),
      condition: 'sunny',
      temperature: 28,
      humidity: 55,
      precipitation: 0,
      windSpeed: 5,
    },
  ]);

  // In a real app, this would fetch from a weather API
  useEffect(() => {
    // Simulating API call
    const timer = setTimeout(() => {
      console.log('Weather data updated');
      // In a real app, we would update the weather data here
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getWeatherIcon = (condition: WeatherData['condition']) => {
    switch (condition) {
      case 'sunny':
        return '☀️';
      case 'cloudy':
        return '☁️';
      case 'rainy':
        return '🌧️';
      case 'stormy':
        return '⛈️';
      default:
        return '❓';
    }
  };

  const getWeatherColor = (condition: WeatherData['condition']) => {
    switch (condition) {
      case 'sunny':
        return 'bg-yellow-100';
      case 'cloudy':
        return 'bg-gray-100';
      case 'rainy':
        return 'bg-blue-100';
      case 'stormy':
        return 'bg-purple-100';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Weather Forecast</h1>
      
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-700">{location}</h2>
          <p className="text-gray-500">Last updated: {new Date().toLocaleTimeString()}</p>
        </div>
        <div>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
            Change Location
          </button>
        </div>
      </div>

      {/* Current Weather */}
      <div className={`${getWeatherColor(currentWeather.condition)} rounded-lg shadow-md p-6 mb-8`}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800">Current Weather</h2>
            <p className="text-gray-600">{currentWeather.date}</p>
          </div>
          <div className="flex items-center">
            <span className="text-6xl mr-4">{getWeatherIcon(currentWeather.condition)}</span>
            <div>
              <p className="text-4xl font-bold text-gray-800">{currentWeather.temperature}°C</p>
              <p className="text-gray-600 capitalize">{currentWeather.condition}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-white bg-opacity-60 p-3 rounded-md shadow-sm">
            <p className="text-sm text-gray-500">Humidity</p>
            <p className="text-xl font-semibold">{currentWeather.humidity}%</p>
          </div>
          <div className="bg-white bg-opacity-60 p-3 rounded-md shadow-sm">
            <p className="text-sm text-gray-500">Precipitation</p>
            <p className="text-xl font-semibold">{currentWeather.precipitation}%</p>
          </div>
          <div className="bg-white bg-opacity-60 p-3 rounded-md shadow-sm">
            <p className="text-sm text-gray-500">Wind Speed</p>
            <p className="text-xl font-semibold">{currentWeather.windSpeed} km/h</p>
          </div>
          <div className="bg-white bg-opacity-60 p-3 rounded-md shadow-sm">
            <p className="text-sm text-gray-500">Feels Like</p>
            <p className="text-xl font-semibold">{currentWeather.temperature - 2}°C</p>
          </div>
        </div>
      </div>

      {/* 5-Day Forecast */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">5-Day Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {forecast.map((day, index) => (
          <div 
            key={index} 
            className={`${getWeatherColor(day.condition)} rounded-lg shadow-md p-4 transition-transform hover:scale-105`}
          >
            <p className="font-semibold text-gray-700">{day.date}</p>
            <div className="flex justify-between items-center my-2">
              <span className="text-4xl">{getWeatherIcon(day.condition)}</span>
              <span className="text-2xl font-bold">{day.temperature}°C</span>
            </div>
            <p className="text-gray-600 capitalize">{day.condition}</p>
            <div className="mt-2 text-sm text-gray-600">
              <p>Humidity: {day.humidity}%</p>
              <p>Precip: {day.precipitation}%</p>
              <p>Wind: {day.windSpeed} km/h</p>
            </div>
          </div>
        ))}
      </div>

      {/* Weather Alerts */}
      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong className="font-medium">Weather Advisory:</strong> Potential for heavy rainfall on {forecast[1].date}. Plan field activities accordingly.
            </p>
          </div>
        </div>
      </div>

      {/* Weather Impact on Crops */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-green-700">Weather Impact on Crops</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-md p-4">
            <h3 className="font-medium text-gray-800 mb-2">Wheat Fields</h3>
            <p className="text-gray-600">The upcoming rain will benefit wheat growth. Consider delaying fertilizer application until after rainfall.</p>
          </div>
          <div className="border border-gray-200 rounded-md p-4">
            <h3 className="font-medium text-gray-800 mb-2">Vegetable Gardens</h3>
            <p className="text-gray-600">Protect sensitive vegetables from heavy rain forecast. Consider temporary covers for tomato plants.</p>
          </div>
          <div className="border border-gray-200 rounded-md p-4">
            <h3 className="font-medium text-gray-800 mb-2">Fruit Orchards</h3>
            <p className="text-gray-600">The warm temperatures will accelerate fruit ripening. Plan for earlier harvest if the warm trend continues.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;