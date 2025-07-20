import React, { useState } from 'react';
import { 
  MapPin, 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye, 
  Sun, 
  Cloud, 
  CloudRain,
  AlertTriangle,
  Calendar,
  TrendingUp
} from 'lucide-react';
import { mockWeatherData } from '../data/mockData';

const Weather: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState('Delhi, India');
  const weatherData = mockWeatherData;

  const locations = [
    'Delhi, India',
    'Mumbai, Maharashtra',
    'Bangalore, Karnataka',
    'Chennai, Tamil Nadu',
    'Kolkata, West Bengal',
    'Pune, Maharashtra'
  ];

  const getWeatherIcon = (condition: string, size: string = 'w-8 h-8') => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className={`${size} text-yellow-500`} />;
      case 'cloudy':
      case 'partly cloudy':
        return <Cloud className={`${size} text-gray-500`} />;
      case 'light rain':
      case 'rain':
        return <CloudRain className={`${size} text-blue-500`} />;
      default:
        return <Sun className={`${size} text-yellow-500`} />;
    }
  };

  const cropRecommendations = [
    {
      crop: 'Wheat',
      status: 'Ideal',
      recommendation: 'Perfect conditions for sowing. Temperature and moisture levels are optimal.',
      color: 'success'
    },
    {
      crop: 'Rice',
      status: 'Caution',
      recommendation: 'Monitor water levels. Expected rainfall may affect irrigation schedule.',
      color: 'warning'
    },
    {
      crop: 'Tomatoes',
      status: 'Good',
      recommendation: 'Good growing conditions. Ensure proper drainage during rainy period.',
      color: 'success'
    },
    {
      crop: 'Cotton',
      status: 'Monitor',
      recommendation: 'Watch for pest activity due to humidity levels. Consider preventive measures.',
      color: 'warning'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Weather Dashboard</h1>
          <p className="text-gray-600">Real-time weather updates and crop-specific recommendations</p>
        </div>

        {/* Location Selector */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-4">
            <MapPin className="w-5 h-5 text-gray-500" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Weather */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedLocation}</h2>
                  <p className="text-blue-100">Current Weather</p>
                </div>
                {getWeatherIcon(weatherData.current.condition, 'w-16 h-16')}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Thermometer className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                  <p className="text-3xl font-bold">{weatherData.current.temperature}°C</p>
                  <p className="text-blue-100 text-sm">Temperature</p>
                </div>
                <div className="text-center">
                  <Droplets className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                  <p className="text-3xl font-bold">{weatherData.current.humidity}%</p>
                  <p className="text-blue-100 text-sm">Humidity</p>
                </div>
                <div className="text-center">
                  <Wind className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                  <p className="text-3xl font-bold">{weatherData.current.windSpeed}</p>
                  <p className="text-blue-100 text-sm">Wind (km/h)</p>
                </div>
                <div className="text-center">
                  <CloudRain className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                  <p className="text-3xl font-bold">{weatherData.current.rainfall}</p>
                  <p className="text-blue-100 text-sm">Rainfall (mm)</p>
                </div>
              </div>
            </div>

            {/* 7-Day Forecast */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex items-center space-x-2 mb-6">
                <Calendar className="w-5 h-5 text-gray-500" />
                <h2 className="text-xl font-semibold text-gray-900">7-Day Forecast</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className="text-center p-4 rounded-lg hover:bg-gray-50">
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                    </p>
                    <div className="mb-2 flex justify-center">
                      {getWeatherIcon(day.condition, 'w-6 h-6')}
                    </div>
                    <p className="text-lg font-bold text-gray-900">{day.high}°</p>
                    <p className="text-sm text-gray-500">{day.low}°</p>
                    <p className="text-xs text-blue-600 mt-1">{day.precipitation}%</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Crop Recommendations */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <TrendingUp className="w-5 h-5 text-gray-500" />
                <h2 className="text-xl font-semibold text-gray-900">Crop Recommendations</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cropRecommendations.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{item.crop}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.color === 'success' ? 'bg-success-100 text-success-700' :
                        item.color === 'warning' ? 'bg-warning-100 text-warning-700' :
                        'bg-error-100 text-error-700'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{item.recommendation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Weather Alerts */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                <h2 className="text-lg font-semibold text-gray-900">Weather Alerts</h2>
              </div>
              <div className="space-y-3">
                {weatherData.alerts.map((alert, index) => (
                  <div key={index} className={`p-3 rounded-lg border-l-4 ${
                    alert.severity === 'high' ? 'border-error-500 bg-error-50' :
                    alert.severity === 'medium' ? 'border-warning-500 bg-warning-50' :
                    'border-success-500 bg-success-50'
                  }`}>
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className={`w-4 h-4 mt-0.5 ${
                        alert.severity === 'high' ? 'text-error-500' :
                        alert.severity === 'medium' ? 'text-warning-500' :
                        'text-success-500'
                      }`} />
                      <div>
                        <p className={`text-sm font-medium ${
                          alert.severity === 'high' ? 'text-error-700' :
                          alert.severity === 'medium' ? 'text-warning-700' :
                          'text-success-700'
                        }`}>
                          {alert.type === 'weather' ? 'Weather Alert' : 'Crop Advisory'}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weather Statistics */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">This Month's Summary</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Average Temperature</span>
                  <span className="font-medium text-gray-900">26°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Rainfall</span>
                  <span className="font-medium text-gray-900">45mm</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Sunny Days</span>
                  <span className="font-medium text-gray-900">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Rainy Days</span>
                  <span className="font-medium text-gray-900">6</span>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Weather Tips</h2>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">Irrigation Tip</p>
                  <p className="text-xs text-blue-700 mt-1">
                    With upcoming rain, reduce irrigation for the next 3 days.
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-900">Harvest Reminder</p>
                  <p className="text-xs text-green-700 mt-1">
                    Perfect weather for harvesting mature crops before rain.
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm font-medium text-yellow-900">Pest Control</p>
                  <p className="text-xs text-yellow-700 mt-1">
                    High humidity may increase pest activity. Monitor closely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;