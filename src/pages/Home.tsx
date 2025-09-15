import { Package, Code2, Layers, GitBranch } from "lucide-react";
import { Card, Badge } from "@/packages/ui";
import { AppGrid } from "@/components/AppGrid";
import { appsConfig } from "@/config/apps";

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
      <div className="text-center py-7">
        <div className="flex justify-center gap-6 items-center">
          <div className="gradient-hero rounded-full w-12 h-12 mb-6 flex mt-2 items-center justify-center">
            <GitBranch className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            MiniHub MVP
          </h1>
        </div>
        <p className="text-[16px] text-muted-foreground max-w-2xl m-auto">
          This project is a platform that unifies 30 mini-applications under a
          single monorepo architecture to meet diverse needs. Each application
          operates independently but is managed through a common system
        </p>
      </div>

      {/* Apps Grid */}
      <AppGrid apps={appsConfig} itemsPerPage={6} />

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
    </div>
  );
}
