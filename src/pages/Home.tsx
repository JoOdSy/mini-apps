import {
  CheckSquare,
  Cloud,
  Package,
  Code2,
  Layers,
  GitBranch,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button, Card, Badge } from "@/packages/ui";

export function Home() {
  const features = [
    {
      icon: Package,
      title: "Shared UI Components",
      description: "Reusable components across all apps",
      items: [
        "Button with variants",
        "Card layouts",
        "Form inputs",
        "Badges & chips",
      ],
    },
    {
      icon: Code2,
      title: "Shared Utilities",
      description: "Common functions and helpers",
      items: [
        "Class name merging",
        "Date formatting",
        "Local storage",
        "ID generation",
      ],
    },
    {
      icon: Layers,
      title: "App Architecture",
      description: "Clean separation of concerns",
      items: [
        "Custom hooks",
        "Type definitions",
        "Component structure",
        "Asset organization",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <div className="flex justify-center gap-6 items-center">
          <div className="gradient-hero rounded-full w-12 h-12 mb-6 flex mt-2 items-center justify-center">
            <GitBranch className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            MiniHub MVP
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          This project is a platform that unifies 30 mini-applications under a
          single monorepo architecture to meet diverse needs. Each application
          operates independently but is managed through a common system
        </p>
      </div>

      {/* Apps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          variant="interactive"
          className="p-6 hover:shadow-glow transition-spring"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <CheckSquare className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Todo App</h3>
              <p className="text-muted-foreground">
                Task management with priorities
              </p>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <Badge variant="outline" className="mr-2">
              Custom Hooks
            </Badge>
            <Badge variant="outline" className="mr-2">
              Local Storage
            </Badge>
            <Badge variant="outline" className="mr-2">
              Filtering
            </Badge>
          </div>
          <Button variant="gradient" className="w-full" asChild>
            <Link to="/todo">Open Todo App</Link>
          </Button>
        </Card>

        <Card
          variant="interactive"
          className="p-6 hover:shadow-glow transition-spring"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-accent/10 p-3 rounded-lg">
              <Cloud className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Weather App</h3>
              <p className="text-muted-foreground">
                Weather data and forecasts
              </p>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <Badge variant="outline" className="mr-2">
              Mock API
            </Badge>
            <Badge variant="outline" className="mr-2">
              Saved Locations
            </Badge>
            <Badge variant="outline" className="mr-2">
              Real-time
            </Badge>
          </div>
          <Button variant="gradient" className="w-full" asChild>
            <Link to="/weather">Open Weather App</Link>
          </Button>
        </Card>

        <Card
          variant="interactive"
          className="p-6 hover:shadow-glow transition-spring"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-accent/10 p-3 rounded-lg">
              <Cloud className="h-8 w-8 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Weather App</h3>
              <p className="text-muted-foreground">
                Let's know your IQ level
              </p>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <Badge variant="outline" className="mr-2">
              Mock Questions
            </Badge>
            <Badge variant="outline" className="mr-2">
              See live resul
            </Badge>
            <Badge variant="outline" className="mr-2">
              See Overall
            </Badge>
          </div>
          <Button variant="gradient" className="w-full" asChild>
            <Link to="/quiz">Open Quiz App</Link>
          </Button>
        </Card>
      </div>

      {/* Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">
          Monorepo Architecture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} variant="elevated" className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                {feature.description}
              </p>
              <ul className="text-sm space-y-1">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Structure Overview */}
      {/* <Card className="p-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <Code2 className="h-5 w-5" />
          Project Structure
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm font-mono">
          <div>
            <div className="text-muted-foreground mb-2">
              Directory Structure:
            </div>
            <div className="bg-muted p-3 rounded-md">
              <div>my-projects/</div>
              <div className="ml-2">├── apps/</div>
              <div className="ml-4">│ ├── todo/</div>
              <div className="ml-6">│ │ ├── components/</div>
              <div className="ml-6">│ │ ├── hooks/</div>
              <div className="ml-6">│ │ ├── types/</div>
              <div className="ml-6">│ │ └── assets/</div>
              <div className="ml-4">│ └── weather/</div>
              <div className="ml-6">│ ├── components/</div>
              <div className="ml-6">│ ├── hooks/</div>
              <div className="ml-6">│ ├── types/</div>
              <div className="ml-6">│ └── assets/</div>
              <div className="ml-2">└── packages/</div>
              <div className="ml-4"> ├── ui/</div>
              <div className="ml-4"> └── utils/</div>
            </div>
          </div>
          <div>
            <div className="text-muted-foreground mb-2">Key Benefits:</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="success" className="text-xs">
                  Shared
                </Badge>
                <span>Code reusability across apps</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="success" className="text-xs">
                  Clean
                </Badge>
                <span>Separation of concerns</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="success" className="text-xs">
                  Scalable
                </Badge>
                <span>Easy to add new apps</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="success" className="text-xs">
                  Type-safe
                </Badge>
                <span>TypeScript throughout</span>
              </div>
            </div>
          </div>
        </div>
      </Card> */}
    </div>
  );
}
