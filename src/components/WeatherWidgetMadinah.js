import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
const MADINAH_COORDS = { lat: 24.5247, lon: 39.5692 };
const WeatherWidgetMadinah = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${MADINAH_COORDS.lat}&longitude=${MADINAH_COORDS.lon}&current_weather=true&hourly=temperature_2m,weathercode,apparent_temperature,precipitation,cloudcover,windspeed_10m`)
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
    if (loading)
        return _jsx("div", { className: "text-gray-500", children: "Loading weather..." });
    if (error)
        return _jsx("div", { className: "text-red-500", children: error });
    if (!weather)
        return null;
    return (_jsxs("div", { className: "bg-white/90 rounded-xl shadow-lg p-6 flex flex-col items-center min-w-0 w-full max-w-xs", children: [_jsxs("div", { className: "text-nusuk-gold text-2xl font-bold mb-1", children: [Math.round(weather.temperature), "\u00B0C"] }), _jsx("div", { className: "text-nusuk-teal font-semibold mb-2", children: "Madinah" }), _jsx("div", { className: "text-gray-600 text-sm mb-1", children: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) }), _jsx("div", { className: "text-gray-500 text-xs", children: weather.weathercode === 0 ? 'Clear' : 'See details' })] }));
};
export default WeatherWidgetMadinah;
