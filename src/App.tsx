import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { TodoApp } from "./apps/todo/TodoApp";
import { WeatherApp } from "./apps/weather/WeatherApp";
import { Navigation } from "./components/Navigation";
import NotFound from "./pages/NotFound";
import AgeCalculate from "./apps/ageCalculator/AgeCalculate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-6">
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todo" element={<TodoApp />} />
              <Route path="/weather" element={<WeatherApp />} />
              <Route path="/quiz" element={<AgeCalculate />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
