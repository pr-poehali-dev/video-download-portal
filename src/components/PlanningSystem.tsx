import { useState } from "react";
import Icon from "@/components/ui/icon";
import FeatureCard from "./FeatureCard";

interface Task {
  id: number;
  title: string;
  status: "todo" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  dueDate: string;
}

const PlanningSystem = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Написать сценарий пилотного эпизода",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-01-15",
    },
    {
      id: 2,
      title: "Кастинг главных героев",
      status: "todo",
      priority: "medium",
      dueDate: "2025-01-20",
    },
    {
      id: 3,
      title: "Подготовка декораций",
      status: "done",
      priority: "high",
      dueDate: "2025-01-10",
    },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now(),
        title: newTask,
        status: "todo",
        priority: "medium",
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0],
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const toggleTaskStatus = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          const statusOrder = ["todo", "in-progress", "done"] as const;
          const currentIndex = statusOrder.indexOf(task.status);
          const nextIndex = (currentIndex + 1) % statusOrder.length;
          return { ...task, status: statusOrder[nextIndex] };
        }
        return task;
      }),
    );
  };

  const getStatusIcon = (status: Task["status"]) => {
    switch (status) {
      case "todo":
        return "⏳";
      case "in-progress":
        return "🔥";
      case "done":
        return "✅";
    }
  };

  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "high":
        return "text-red-400";
      case "medium":
        return "text-yellow-400";
      case "low":
        return "text-green-400";
    }
  };

  return (
    <FeatureCard
      title="📅 Планировщик Ужасов"
      description="Управление задачами проекта"
      icon="📋"
      className="animate-float"
      style={{ animationDelay: "0.5s" }}
    >
      {/* Add task form */}
      <div className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Новая жуткая задача..."
          className="flex-1 p-2 rounded-lg bg-secondary/50 border border-primary/30 text-foreground placeholder-muted-foreground text-sm"
          onKeyPress={(e) => e.key === "Enter" && addTask()}
        />
        <button
          onClick={addTask}
          className="halloween-button py-2 px-4 text-sm"
          disabled={!newTask.trim()}
        >
          <Icon name="Plus" size={16} />
        </button>
      </div>

      {/* Tasks list */}
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-secondary/30 rounded-lg p-3 border border-primary/20 hover:bg-secondary/50 transition-colors cursor-pointer"
            onClick={() => toggleTaskStatus(task.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg">{getStatusIcon(task.status)}</span>
                <div>
                  <p
                    className={`text-sm font-medium ${task.status === "done" ? "line-through text-muted-foreground" : "text-foreground"}`}
                  >
                    {task.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-xs ${getPriorityColor(task.priority)}`}
                    >
                      ●
                    </span>
                    <span className="text-xs text-muted-foreground">
                      до {new Date(task.dueDate).toLocaleDateString("ru")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-primary/20">
        <div className="text-center">
          <div className="text-lg font-bold text-yellow-400">
            {tasks.filter((t) => t.status === "todo").length}
          </div>
          <div className="text-xs text-muted-foreground">В планах</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-orange-400">
            {tasks.filter((t) => t.status === "in-progress").length}
          </div>
          <div className="text-xs text-muted-foreground">В работе</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-green-400">
            {tasks.filter((t) => t.status === "done").length}
          </div>
          <div className="text-xs text-muted-foreground">Готово</div>
        </div>
      </div>
    </FeatureCard>
  );
};

export default PlanningSystem;
