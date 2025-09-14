import { useState } from "react";
import { Search, Plus } from "lucide-react";
import { Button, Input, Card } from "@/packages/ui";

interface LocationSearchProps {
  onSearch: (location: string) => void;
  onAddLocation: (name: string, country: string) => void;
  loading: boolean;
}

const popularCities = [
  { name: "Tashkent", country: "Uzbekistan" },
  { name: "London", country: "United Kingdom" },
  { name: "New York", country: "United States" },
  { name: "Tokyo", country: "Japan" },
  { name: "Paris", country: "France" },
  { name: "Dubai", country: "UAE" },
];

export function LocationSearch({
  onSearch,
  onAddLocation,
  loading,
}: LocationSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for a city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              disabled={loading}
            />
          </div>
          <Button type="submit" disabled={!searchQuery.trim() || loading}>
            {loading ? "Searching..." : "Search"}
          </Button>
        </form>
      </Card>

      <Card className="p-4">
        <h3 className="font-medium mb-3">Popular Cities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {popularCities.map((city) => (
            <Button
              key={`${city.name}-${city.country}`}
              variant="outline"
              size="sm"
              className="justify-between"
              onClick={() => onSearch(city.name)}
              disabled={loading}
            >
              <span>{city.name}</span>
              <Plus
                className="h-3 w-3 ml-2 cursor-pointer hover:text-primary"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddLocation(city.name, city.country);
                }}
              />
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
}
