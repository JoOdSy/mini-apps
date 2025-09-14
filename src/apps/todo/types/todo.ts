// Todo App Types
// Defines the data structures used in the Todo application

export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  category: string;
  createdAt: Date;
  updatedAt: Date;
  dueDate?: Date;
}

export interface TodoCategory {
  id: string;
  name: string;
  color: string;
  icon?: string;
}

export interface TodoFilters {
  status: "all" | "active" | "completed";
  category?: string;
  priority?: "low" | "medium" | "high";
  search: string;
}
