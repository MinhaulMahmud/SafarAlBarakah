// src/components/WeatherWidget.tsx
import React, { useEffect, useState } from 'react';

const API_KEY = 'demo'; // Replace with your own API key for production
const MAKKAH_COORDS = { lat: 21.3891, lon: 39.8579 };

const WeatherWidget = () => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Using Open-Meteo free API (no key required)
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${MAKKAH_COORDS.lat}&longitude=${MAKKAH_COORDS.lon}&current_weather=true&hourly=temperature_2m,weathercode,apparent_temperature,precipitation,cloudcover,windspeed_10m`)
      .then(res => res.json())
      .then(data => {
        setWeather(data.current_weather);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not fetch weather.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-gray-500">Loading weather...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!weather) return null;

  return (
    <div className="bg-white/90 rounded-xl shadow-lg p-6 flex flex-col items-center min-w-0 w-full max-w-xs">
      <div className="text-nusuk-gold text-2xl font-bold mb-1">{Math.round(weather.temperature)}°C</div>
      <div className="text-nusuk-teal font-semibold mb-2">Makkah</div>
      <div className="text-gray-600 text-sm mb-1">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
      <div className="text-gray-500 text-xs">{weather.weathercode === 0 ? 'Clear' : 'See details'}</div>
    </div>
  );
};

export default WeatherWidget;
