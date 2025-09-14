import { MapPin, Thermometer, Droplets, Wind, Eye, Gauge } from "lucide-react";
import { WeatherData } from "../types/weather";
import { Card, Badge } from "@/packages/ui";
import { formatTime } from "@/packages/utils";

interface WeatherCardProps {
  weather: WeatherData;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <Card variant="gradient" className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <MapPin className="h-4 w-4" />
            {weather.location}, {weather.country}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{weather.icon}</span>
            <div>
              <div className="text-3xl font-bold">{weather.temperature}°C</div>
              <div className="text-sm text-muted-foreground">
                {weather.condition}
              </div>
            </div>
          </div>
        </div>
        <Badge variant="outline" className="text-xs">
          Updated {formatTime(weather.lastUpdated)}
        </Badge>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <Droplets className="h-4 w-4 text-blue-500" />
          <div className="text-sm">
            <div className="font-medium">{weather.humidity}%</div>
            <div className="text-muted-foreground text-xs">Humidity</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Wind className="h-4 w-4 text-green-500" />
          <div className="text-sm">
            <div className="font-medium">{weather.windSpeed} km/h</div>
            <div className="text-muted-foreground text-xs">
              Wind {weather.windDirection}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Gauge className="h-4 w-4 text-purple-500" />
          <div className="text-sm">
            <div className="font-medium">{weather.pressure} hPa</div>
            <div className="text-muted-foreground text-xs">Pressure</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Eye className="h-4 w-4 text-gray-500" />
          <div className="text-sm">
            <div className="font-medium">{weather.visibility} km</div>
            <div className="text-muted-foreground text-xs">Visibility</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Thermometer className="h-4 w-4 text-orange-500" />
          <div className="text-sm">
            <div className="font-medium">UV {weather.uvIndex}</div>
            <div className="text-muted-foreground text-xs">UV Index</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
