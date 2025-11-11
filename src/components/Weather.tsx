import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Thermometer, Droplets, Wind } from 'lucide-react';

interface WeatherData {
  temperature: number;
  humidity?: number;
  windSpeed?: number;
  weatherCode: number;
  visibility?: number;
  time: string;
}

interface WeatherProps {
  showDetailed?: boolean;
  className?: string;
}

const Weather: React.FC<WeatherProps> = ({ showDetailed = false, className = '' }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Katni, MP coordinates
  const KATNI_LAT = 23.8315;
  const KATNI_LNG = 80.4065;

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${KATNI_LAT}&longitude=${KATNI_LNG}&current_weather=true&hourly=relative_humidity_2m,wind_speed_10m,visibility&timezone=Asia/Kolkata`
      );
      const data = await response.json();
      
      if (data.current_weather) {
        setWeather({
          temperature: Math.round(data.current_weather.temperature),
          humidity: data.hourly?.relative_humidity_2m?.[0],
          windSpeed: data.hourly?.wind_speed_10m?.[0],
          weatherCode: data.current_weather.weathercode,
          visibility: data.hourly?.visibility?.[0],
          time: data.current_weather.time
        });
        setLastUpdated(new Date());
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIcon = (code: number) => {
    if (code <= 1) return <Sun className="h-4 w-4 text-yellow-500" />;
    if (code <= 48) return <Cloud className="h-4 w-4 text-gray-500" />;
    return <CloudRain className="h-4 w-4 text-blue-500" />;
  };

  const getWeatherDescription = (code: number) => {
    if (code === 0) return 'Clear';
    if (code <= 3) return 'Partly Cloudy';
    if (code <= 48) return 'Cloudy';
    if (code <= 67) return 'Rainy';
    return 'Stormy';
  };

  useEffect(() => {
    fetchWeather();
    const intervalId = setInterval(fetchWeather, 15 * 60 * 1000); // Update every 15 minutes
    return () => clearInterval(intervalId);
  }, []);

  if (loading && !weather) {
    return (
      <div className={`weather-widget ${className}`}>
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
          <p className="text-xs">Loading weather...</p>
        </div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className={`weather-widget ${className}`}>
        <p className="text-xs opacity-75">Weather unavailable</p>
      </div>
    );
  }

  if (showDetailed) {
    return (
      <div className={`weather-widget bg-white/10 backdrop-blur-md rounded-xl p-4 ${className}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {getWeatherIcon(weather.weatherCode)}
              <span className="text-sm font-medium">Katni, MP</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{weather.temperature}°C</div>
            <div className="text-xs opacity-75">{getWeatherDescription(weather.weatherCode)}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-xs">
          {weather.humidity && (
            <div className="flex items-center space-x-1">
              <Droplets className="h-3 w-3 text-blue-400" />
              <span>{Math.round(weather.humidity)}%</span>
            </div>
          )}
          {weather.windSpeed && (
            <div className="flex items-center space-x-1">
              <Wind className="h-3 w-3 text-gray-400" />
              <span>{Math.round(weather.windSpeed)} km/h</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <Thermometer className="h-3 w-3 text-red-400" />
            <span>Real-time</span>
          </div>
        </div>
        
        {lastUpdated && (
          <div className="text-xs opacity-50 mt-2">
            Updated: {lastUpdated.toLocaleTimeString('en-IN', { 
              hour: '2-digit', 
              minute: '2-digit',
              timeZone: 'Asia/Kolkata'
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`weather-widget ${className}`}>
      <div className="flex items-center space-x-1">
        {getWeatherIcon(weather.weatherCode)}
        <span className="text-xs font-medium">Katni, MP: {weather.temperature}°C</span>
      </div>
    </div>
  );
};

export default Weather;