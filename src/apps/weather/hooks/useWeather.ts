import { useState, useEffect } from "react";
import { WeatherData, SavedLocation } from "../types/weather";
import { getStorageItem, setStorageItem, generateId } from "@/packages/utils";

// Mock weather data for demonstration
const mockWeatherData: WeatherData[] = [
  {
    location: "Tashkent",
    country: "Uzbekistan",
    temperature: 24,
    condition: "Sunny",
    description: "Clear sky",
    humidity: 45,
    windSpeed: 12,
    windDirection: "NW",
    pressure: 1015,
    visibility: 10,
    uvIndex: 6,
    icon: "☀️",
    lastUpdated: new Date(),
  },
  {
    location: "London",
    country: "United Kingdom",
    temperature: 16,
    condition: "Cloudy",
    description: "Overcast clouds",
    humidity: 78,
    windSpeed: 8,
    windDirection: "SW",
    pressure: 1008,
    visibility: 8,
    uvIndex: 2,
    icon: "☁️",
    lastUpdated: new Date(),
  },
  {
    location: "New York",
    country: "United States",
    temperature: 22,
    condition: "Partly Cloudy",
    description: "Few clouds",
    humidity: 62,
    windSpeed: 15,
    windDirection: "E",
    pressure: 1012,
    visibility: 12,
    uvIndex: 4,
    icon: "⛅",
    lastUpdated: new Date(),
  },
];

export function useWeather() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );
  const [savedLocations, setSavedLocations] = useState<SavedLocation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load saved locations from localStorage
  useEffect(() => {
    const saved = getStorageItem<SavedLocation[]>(
      "monorepo-weather-locations",
      []
    );
    setSavedLocations(saved);

    // Load default location weather
    const defaultLocation = saved.find((loc) => loc.isDefault);
    if (defaultLocation) {
      fetchWeather(defaultLocation.name);
    } else {
      // Default to Tashkent
      fetchWeather("Tashkent");
    }
  }, []);

  // Save locations to localStorage
  useEffect(() => {
    setStorageItem("monorepo-weather-locations", savedLocations);
  }, [savedLocations]);

  const fetchWeather = async (location: string): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Find mock data or create new entry
      const weather = mockWeatherData.find((w) =>
        w.location.toLowerCase().includes(location.toLowerCase())
      ) || {
        ...mockWeatherData[0],
        location,
        temperature: Math.round(Math.random() * 30 + 5),
        lastUpdated: new Date(),
      };

      setCurrentWeather(weather);
    } catch (err) {
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  const addLocation = (name: string, country: string): void => {
    const newLocation: SavedLocation = {
      id: generateId(),
      name,
      country,
      lat: 0,
      lon: 0,
      isDefault: savedLocations.length === 0,
    };
    setSavedLocations((prev) => [...prev, newLocation]);
  };

  const removeLocation = (id: string): void => {
    setSavedLocations((prev) => prev.filter((loc) => loc.id !== id));
  };

  const setDefaultLocation = (id: string): void => {
    setSavedLocations((prev) =>
      prev.map((loc) => ({
        ...loc,
        isDefault: loc.id === id,
      }))
    );
  };

  return {
    currentWeather,
    savedLocations,
    loading,
    error,
    fetchWeather,
    addLocation,
    removeLocation,
    setDefaultLocation,
  };
}
