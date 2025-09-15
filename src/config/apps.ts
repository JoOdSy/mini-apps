import {
  CheckSquare,
  Cloud,
  Calculator,
  BookOpen,
  Music,
  Camera,
  Clock,
  FileText,
  Gamepad2,
  Palette,
  LucideIcon,
} from "lucide-react";

export interface AppConfig {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  badges: string[];
  status: "active" | "coming-soon" | "beta";
  category: string;
}

export const appsConfig: AppConfig[] = [
  {
    id: "todo",
    title: "Todo App",
    description: "Task management with priorities and filtering",
    path: "/todo",
    icon: CheckSquare,
    iconColor: "text-primary",
    iconBgColor: "bg-primary/10",
    badges: ["Custom Hooks", "Local Storage", "Filtering"],
    status: "active",
    category: "Productivity",
  },
  {
    id: "weather",
    title: "Weather App",
    description: "Weather data and forecasts with saved locations",
    path: "/weather",
    icon: Cloud,
    iconColor: "text-accent",
    iconBgColor: "bg-accent/10",
    badges: ["Mock API", "Saved Locations", "Real-time"],
    status: "active",
    category: "Utilities",
  },
  {
    id: "quiz",
    title: "Quiz App",
    description: "Interactive quiz with instant results and scoring",
    path: "/quiz",
    icon: BookOpen,
    iconColor: "text-green-600",
    iconBgColor: "bg-green-100",
    badges: ["Interactive", "Scoring", "Multiple Choice"],
    status: "active",
    category: "Education",
  },
  {
    id: "calculator",
    title: "Calculator",
    description: "Advanced calculator with scientific functions",
    path: "/calculator",
    icon: Calculator,
    iconColor: "text-blue-600",
    iconBgColor: "bg-blue-100",
    badges: ["Scientific", "Memory", "History"],
    status: "coming-soon",
    category: "Tools",
  },
  {
    id: "music-player",
    title: "Music Player",
    description: "Stream music with playlists and equalizer",
    path: "/music",
    icon: Music,
    iconColor: "text-purple-600",
    iconBgColor: "bg-purple-100",
    badges: ["Playlists", "Equalizer", "Visualizer"],
    status: "beta",
    category: "Entertainment",
  },
  {
    id: "photo-editor",
    title: "Photo Editor",
    description: "Edit photos with filters and basic tools",
    path: "/photo-editor",
    icon: Camera,
    iconColor: "text-pink-600",
    iconBgColor: "bg-pink-100",
    badges: ["Filters", "Crop", "Resize"],
    status: "coming-soon",
    category: "Creative",
  },
  {
    id: "oclock",
    title: "Digital Clock",
    description: "Real-time digital clock with timezone support",
    path: "/oclock",
    icon: Clock,
    iconColor: "text-orange-600",
    iconBgColor: "bg-orange-100",
    badges: ["Real-time", "Timezone", "Customizable"],
    status: "active",
    category: "Utilities",
  },
  {
    id: "notes",
    title: "Notes App",
    description: "Take notes with rich text formatting",
    path: "/notes",
    icon: FileText,
    iconColor: "text-indigo-600",
    iconBgColor: "bg-indigo-100",
    badges: ["Rich Text", "Search", "Categories"],
    status: "active",
    category: "Productivity",
  },
  {
    id: "games",
    title: "Mini Games",
    description: "Collection of fun mini games",
    path: "/games",
    icon: Gamepad2,
    iconColor: "text-red-600",
    iconBgColor: "bg-red-100",
    badges: ["Puzzle", "Arcade", "Multiplayer"],
    status: "beta",
    category: "Entertainment",
  },
  {
    id: "color-picker",
    title: "Color Picker",
    description: "Advanced color picker with palette generator",
    path: "/color-picker",
    icon: Palette,
    iconColor: "text-teal-600",
    iconBgColor: "bg-teal-100",
    badges: ["Palette", "Export", "History"],
    status: "active",
    category: "Creative",
  },
];

export const getAppsByCategory = (category?: string) => {
  if (!category) return appsConfig;
  return appsConfig.filter((app) => app.category === category);
};

export const getActiveApps = () => {
  return appsConfig.filter((app) => app.status === "active");
};

export const getAppById = (id: string) => {
  return appsConfig.find((app) => app.id === id);
};
