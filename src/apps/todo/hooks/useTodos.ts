import { useState, useEffect } from "react";
import { Todo, TodoFilters } from "../types/todo";
import { getStorageItem, setStorageItem, generateId } from "@/packages/utils";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filters, setFilters] = useState<TodoFilters>({
    status: "all",
    search: "",
  });

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = getStorageItem<Todo[]>("monorepo-todos", []);
    setTodos(savedTodos);
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    setStorageItem("monorepo-todos", todos);
  }, [todos]);

  const addTodo = (
    title: string,
    description?: string,
    category = "general",
    priority: "low" | "medium" | "high" = "medium"
  ) => {
    const newTodo: Todo = {
      id: generateId(),
      title,
      description,
      completed: false,
      priority,
      category,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
          : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: string, updates: Partial<Todo>) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, ...updates, updatedAt: new Date() } : todo
      )
    );
  };

  // Filter todos based on current filters
  const filteredTodos = todos.filter((todo) => {
    if (filters.status === "active" && todo.completed) return false;
    if (filters.status === "completed" && !todo.completed) return false;
    if (filters.category && todo.category !== filters.category) return false;
    if (filters.priority && todo.priority !== filters.priority) return false;
    if (
      filters.search &&
      !todo.title.toLowerCase().includes(filters.search.toLowerCase())
    )
      return false;
    return true;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    active: todos.filter((t) => !t.completed).length,
  };

  return {
    todos: filteredTodos,
    allTodos: todos,
    filters,
    setFilters,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    stats,
  };
}
