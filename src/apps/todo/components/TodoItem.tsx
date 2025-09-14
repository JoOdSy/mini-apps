import { Check, X, Clock, Flag } from "lucide-react";
import { Todo } from "../types/todo";
import { Button, Card, Badge } from "@/packages/ui";
import { formatDate, capitalize } from "@/packages/utils";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const priorityColors = {
  low: "secondary",
  medium: "accent",
  high: "destructive",
} as const;

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <Card variant="interactive" className="p-4">
      <div className="flex items-start gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onToggle(todo.id)}
          className={`mt-0.5 ${
            todo.completed ? "text-success" : "text-muted-foreground"
          }`}
        >
          <Check
            className={`h-4 w-4 ${
              todo.completed ? "opacity-100" : "opacity-0"
            }`}
          />
        </Button>

        <div className="flex-1 min-w-0">
          <h3
            className={`font-medium ${
              todo.completed ? "line-through text-muted-foreground" : ""
            }`}
          >
            {todo.title}
          </h3>

          {todo.description && (
            <p className="text-sm text-muted-foreground mt-1">
              {todo.description}
            </p>
          )}

          <div className="flex items-center gap-2 mt-2">
            <Badge variant={priorityColors[todo.priority]} className="text-xs">
              <Flag className="h-3 w-3 mr-1" />
              {capitalize(todo.priority)}
            </Badge>

            <Badge variant="outline" className="text-xs">
              {capitalize(todo.category)}
            </Badge>

            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {formatDate(todo.createdAt)}
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(todo.id)}
          className="text-muted-foreground hover:text-destructive"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
