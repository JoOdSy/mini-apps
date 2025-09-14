import { Search, Filter } from "lucide-react";
import { TodoFilters } from "../types/todo";
import { Button, Input, Badge } from "@/packages/ui";

interface TodoFiltersProps {
  filters: TodoFilters;
  onFiltersChange: (filters: TodoFilters) => void;
  stats: {
    total: number;
    completed: number;
    active: number;
  };
}

export function TodoFiltersComponent({
  filters,
  onFiltersChange,
  stats,
}: TodoFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search todos..."
          value={filters.search}
          onChange={(e) =>
            onFiltersChange({ ...filters, search: e.target.value })
          }
          className="pl-10"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={filters.status === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => onFiltersChange({ ...filters, status: "all" })}
        >
          All ({stats.total})
        </Button>
        <Button
          variant={filters.status === "active" ? "default" : "outline"}
          size="sm"
          onClick={() => onFiltersChange({ ...filters, status: "active" })}
        >
          Active ({stats.active})
        </Button>
        <Button
          variant={filters.status === "completed" ? "success" : "outline"}
          size="sm"
          onClick={() => onFiltersChange({ ...filters, status: "completed" })}
        >
          Completed ({stats.completed})
        </Button>
      </div>

      {(filters.category || filters.priority) && (
        <div className="flex gap-2">
          {filters.category && (
            <Badge
              variant="accent"
              className="cursor-pointer"
              onClick={() =>
                onFiltersChange({ ...filters, category: undefined })
              }
            >
              {filters.category} ✕
            </Badge>
          )}
          {filters.priority && (
            <Badge
              variant="accent"
              className="cursor-pointer"
              onClick={() =>
                onFiltersChange({ ...filters, priority: undefined })
              }
            >
              {filters.priority} priority ✕
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}
