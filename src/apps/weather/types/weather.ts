// Weather App Types
// Defines the data structures used in the Weather application

export interface WeatherData {
  location: string;
  country: string;
  temperature: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  pressure: number;
  visibility: number;
  uvIndex: number;
  icon: string;
  lastUpdated: Date;
}

export interface WeatherForecast {
  date: Date;
  maxTemp: number;
  minTemp: number;
  condition: string;
  icon: string;
  precipitation: number;
}

export interface SavedLocation {
  id: string;
  name: string;
  country: string;
  lat: number;
  lon: number;
  isDefault: boolean;
}
