import { Link } from "react-router-dom";
import { Button, Card, Badge } from "@/packages/ui";
import { AppConfig } from "@/config/apps";

interface AppCardProps {
  app: AppConfig;
}

export function AppCard({ app }: AppCardProps) {
  const Icon = app.icon;

  const getStatusBadge = () => {
    switch (app.status) {
      case "active":
        return (
          <Badge variant="success" className="text-xs">
            Live
          </Badge>
        );
      case "beta":
        return (
          <Badge variant="warning" className="text-xs">
            Beta
          </Badge>
        );
      case "coming-soon":
        return (
          <Badge variant="outline" className="text-xs bg-slate-600">
            Coming Soon
          </Badge>
        );
      default:
        return null;
    }
  };

  const isDisabled = app.status !== "active";

  return (
    <Card
      variant="interactive"
      className={`p-6 transition-spring ${
        isDisabled ? "opacity-60 cursor-not-allowed" : "hover:shadow-glow"
      }`}
    >
      <Link
        to={isDisabled ? "#" : app.path}
        className={isDisabled ? "pointer-events-none" : ""}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className={`${app.iconBgColor} p-3 rounded-lg`}>
            <Icon className={`h-8 w-8 ${app.iconColor}`} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-semibold">{app.title}</h3>
              {getStatusBadge()}
            </div>
            <p className="text-muted-foreground text-sm">{app.description}</p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {app.badges.map((badge, index) => (
            <Badge key={index} variant="outline" className="mr-2 text-xs">
              {badge}
            </Badge>
          ))}
        </div>

        <Button
          variant="gradient"
          className="w-full"
          asChild
          disabled={isDisabled}
        >
          <Link to={isDisabled ? "#" : app.path}>
            {isDisabled ? "Coming Soon" : `Open ${app.title}`}
          </Link>
        </Button>
      </Link>
    </Card>
  );
}
