import React from 'react';
import { Cloud, Sun, CloudRain, Wind, Droplets, Thermometer } from 'lucide-react';

interface WeatherCardProps {
  current: {
    temperature: number;
    condition: string;
    humidity: number;
    rainfall: number;
    windSpeed: number;
  };
  location: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ current, location }) => {
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloudy':
      case 'partly cloudy':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'light rain':
      case 'rain':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg">{location}</h3>
          <p className="text-blue-100 text-sm">Current Weather</p>
        </div>
        {getWeatherIcon(current.condition)}
      </div>

      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-1">
          <Thermometer className="w-5 h-5" />
          <span className="text-3xl font-bold">{current.temperature}°C</span>
        </div>
        <p className="text-blue-100">{current.condition}</p>
      </div>

      <div className="grid grid-cols-3 gap-4 text-sm">
        <div className="flex items-center space-x-2">
          <Droplets className="w-4 h-4" />
          <div>
            <p className="text-blue-100">Humidity</p>
            <p className="font-medium">{current.humidity}%</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Wind className="w-4 h-4" />
          <div>
            <p className="text-blue-100">Wind</p>
            <p className="font-medium">{current.windSpeed} km/h</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <CloudRain className="w-4 h-4" />
          <div>
            <p className="text-blue-100">Rainfall</p>
            <p className="font-medium">{current.rainfall} mm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;