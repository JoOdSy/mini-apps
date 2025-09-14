import { Cloud, MapPin, RefreshCw } from "lucide-react";
import { useWeather } from "./hooks/useWeather";
import { WeatherCard } from "./components/WeatherCard";
import { LocationSearch } from "./components/LocationSearch";
import { SavedLocations } from "./components/SavedLocations";
import { Button, Card } from "@/packages/ui";
import weatherHero from "./assets/weather-hero.jpg";

export function WeatherApp() {
  const {
    currentWeather,
    savedLocations,
    loading,
    error,
    fetchWeather,
    addLocation,
    removeLocation,
    setDefaultLocation,
  } = useWeather();

  const handleRefresh = () => {
    if (currentWeather) {
      fetchWeather(currentWeather.location);
    }
  };

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={weatherHero}
          alt="Weather App"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 flex items-center justify-center">
          <div className="text-center text-white">
            <Cloud className="h-12 w-12 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Weather App</h1>
            <p className="text-white/90">Real-time weather information</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <LocationSearch
            onSearch={fetchWeather}
            onAddLocation={addLocation}
            loading={loading}
          />
          <SavedLocations
            locations={savedLocations}
            onSelect={fetchWeather}
            onSetDefault={setDefaultLocation}
            onRemove={removeLocation}
          />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <h2 className="text-xl font-semibold">Current Weather</h2>
            </div>
            {currentWeather && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={loading}
              >
                <RefreshCw
                  className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
                />
                Refresh
              </Button>
            )}
          </div>

          {error && (
            <Card className="p-4 border-destructive/50 bg-destructive/5">
              <p className="text-destructive text-sm">{error}</p>
            </Card>
          )}

          {loading && (
            <Card className="p-8 text-center">
              <RefreshCw className="h-8 w-8 text-muted-foreground mx-auto mb-4 animate-spin" />
              <p className="text-sm text-muted-foreground">
                Loading weather data...
              </p>
            </Card>
          )}

          {currentWeather && !loading && (
            <WeatherCard weather={currentWeather} />
          )}

          {!currentWeather && !loading && !error && (
            <Card className="p-8 text-center">
              <Cloud className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-medium mb-2">No weather data</h3>
              <p className="text-sm text-muted-foreground">
                Search for a city to see current weather
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
