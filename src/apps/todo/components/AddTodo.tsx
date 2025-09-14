import { useState } from "react";
import { Plus } from "lucide-react";
import { Button, Input, Card } from "@/packages/ui";

interface AddTodoProps {
  onAdd: (
    title: string,
    description?: string,
    category?: string,
    priority?: "low" | "medium" | "high"
  ) => void;
}

export function AddTodo({ onAdd }: AddTodoProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("personal");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim(), description.trim() || undefined, category, priority);
      setTitle("");
      setDescription("");
      setShowDetails(false);
    }
  };

  return (
    <Card className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Add a new todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowDetails(!showDetails)}
          >
            Details
          </Button>
          <Button type="submit" disabled={!title.trim()}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {showDetails && (
          <div className="space-y-3 animate-fade-in">
            <Input
              placeholder="Description (optional)..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="flex gap-2">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-smooth"
              >
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="shopping">Shopping</option>
                <option value="health">Health</option>
              </select>

              <select
                value={priority}
                onChange={(e) =>
                  setPriority(e.target.value as "low" | "medium" | "high")
                }
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-smooth"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
            </div>
          </div>
        )}
      </form>
    </Card>
  );
}
