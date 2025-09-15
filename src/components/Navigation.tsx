import { Link, useLocation } from "react-router-dom";
import {
  CheckSquare,
  Cloud,
  Home,
  Package,
  ShieldQuestion,
} from "lucide-react";
import { Button, Card, Badge } from "@/packages/ui";

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/todo", label: "Todo App", icon: CheckSquare },
    { path: "/weather", label: "Weather App", icon: Cloud },
    { path: "/quiz", label: "Quiz App", icon: ShieldQuestion },
  ];

  return (
    <Card
      variant="elevated"
      className="p-4 mb-2 flex justify-between sticky top-0"
    >
      <div className="flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            <h2 className="font-semibold">MiniHub</h2>
            <Badge variant="accent" className="text-xs">
              APPS
            </Badge>
          </div>
        </Link>
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
    </Card>
  );
}
