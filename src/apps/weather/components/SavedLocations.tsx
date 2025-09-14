import { MapPin, Star, Trash2 } from "lucide-react";
import { SavedLocation } from "../types/weather";
import { Button, Card, Badge } from "@/packages/ui";

interface SavedLocationsProps {
  locations: SavedLocation[];
  onSelect: (location: string) => void;
  onSetDefault: (id: string) => void;
  onRemove: (id: string) => void;
}

export function SavedLocations({
  locations,
  onSelect,
  onSetDefault,
  onRemove,
}: SavedLocationsProps) {
  if (locations.length === 0) {
    return (
      <Card className="p-4 text-center">
        <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">No saved locations yet</p>
        <p className="text-xs text-muted-foreground">
          Add locations to quickly access weather
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-4">
      <h3 className="font-medium mb-3">Saved Locations</h3>
      <div className="space-y-2">
        {locations.map((location) => (
          <div
            key={location.id}
            className="flex items-center justify-between p-2 rounded-md border hover:bg-muted/50 transition-smooth"
          >
            <button
              onClick={() => onSelect(location.name)}
              className="flex items-center gap-2 flex-1 text-left"
            >
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <div className="font-medium text-sm">{location.name}</div>
                <div className="text-xs text-muted-foreground">
                  {location.country}
                </div>
              </div>
              {location.isDefault && (
                <Badge variant="accent" className="text-xs">
                  Default
                </Badge>
              )}
            </button>

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onSetDefault(location.id)}
                className="h-6 w-6"
                disabled={location.isDefault}
              >
                <Star
                  className={`h-3 w-3 ${
                    location.isDefault ? "fill-current" : ""
                  }`}
                />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onRemove(location.id)}
                className="h-6 w-6 text-destructive hover:text-destructive"
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
