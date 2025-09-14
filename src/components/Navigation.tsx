import { Link, useLocation } from "react-router-dom";
import { CheckSquare, Cloud, Home, Package } from "lucide-react";
import { Button, Card, Badge } from "@/packages/ui";

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/todo", label: "Todo App", icon: CheckSquare },
    { path: "/weather", label: "Weather App", icon: Cloud },
  ];

  return (
    <Card variant="elevated" className="p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Package className="h-5 w-5 text-primary" />
          <h2 className="font-semibold">Monorepo Apps</h2>
          <Badge variant="accent" className="text-xs">
            MVP
          </Badge>
        </div>
      </div>

      <nav className="flex flex-wrap gap-2">
        {navItems.map(({ path, label, icon: Icon }) => (
          <Button
            key={path}
            variant={location.pathname === path ? "default" : "outline"}
            size="sm"
            asChild
          >
            <Link to={path} className="flex items-center gap-2">
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          </Button>
        ))}
      </nav>

      <div className="mt-4 text-xs text-muted-foreground">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <strong>Shared Packages:</strong>
            <div>• packages/ui/ (Button, Card, Input, Badge)</div>
            <div>• packages/utils/ (cn, formatDate, storage)</div>
          </div>
          <div>
            <strong>Apps Structure:</strong>
            <div>• apps/todo/ (hooks, components, types)</div>
            <div>• apps/weather/ (hooks, components, types)</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
