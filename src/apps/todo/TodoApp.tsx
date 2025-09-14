import { CheckSquare, BarChart3 } from "lucide-react";
import { useTodos } from "./hooks/useTodos";
import { AddTodo } from "./components/AddTodo";
import { TodoItem } from "./components/TodoItem";
import { TodoFiltersComponent } from "./components/TodoFilters";
import { Card, Badge } from "@/packages/ui";
import todoHero from "./assets/todo-hero.jpg";

export function TodoApp() {
  const { todos, filters, setFilters, addTodo, toggleTodo, deleteTodo, stats } =
    useTodos();

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={todoHero}
          alt="Todo App"
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90 flex items-center justify-center">
          <div className="text-center text-white">
            <CheckSquare className="h-12 w-12 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Todo App</h1>
            <p className="text-white/90">Manage your tasks efficiently</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card variant="gradient" className="p-4 text-center">
          <div className="text-2xl font-bold text-primary">{stats.total}</div>
          <div className="text-sm text-muted-foreground">Total Tasks</div>
        </Card>
        <Card variant="gradient" className="p-4 text-center">
          <div className="text-2xl font-bold text-success">
            {stats.completed}
          </div>
          <div className="text-sm text-muted-foreground">Completed</div>
        </Card>
        <Card variant="gradient" className="p-4 text-center">
          <div className="text-2xl font-bold text-accent">{stats.active}</div>
          <div className="text-sm text-muted-foreground">Active</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <AddTodo onAdd={addTodo} />
          <TodoFiltersComponent
            filters={filters}
            onFiltersChange={setFilters}
            stats={stats}
          />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="h-5 w-5" />
            <h2 className="text-xl font-semibold">
              {filters.status === "all"
                ? "All Tasks"
                : filters.status === "active"
                ? "Active Tasks"
                : "Completed Tasks"}
            </h2>
            <Badge variant="outline">{todos.length}</Badge>
          </div>

          <div className="space-y-3">
            {todos.length === 0 ? (
              <Card className="p-8 text-center">
                <CheckSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-medium mb-2">No todos found</h3>
                <p className="text-sm text-muted-foreground">
                  {filters.status === "all"
                    ? "Add your first todo to get started"
                    : `No ${filters.status} todos to show`}
                </p>
              </Card>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
