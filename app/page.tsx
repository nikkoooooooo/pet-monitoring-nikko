"use client";
import { useState, useEffect } from "react";
import AddTask from "@/components/AddTask";

interface Task {
  task_id: number;
  title: string;
  user_id: number;
  is_complete: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const res = await fetch("/api/task");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const toggleComplete = async (id: number, is_complete: boolean) => {
    await fetch("/api/update-task", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, is_complete: !is_complete }),
    });
    fetchTasks();
  };

  const deleteTask = async (id: number) => {
    await fetch("/api/delete-task", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchTasks();
  };

  return (
    <div className="w-full bg-blue-300 flex flex-col min-h-screen justify-center items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Tasks App</h1>

      <AddTask />

      <ul className="w-full max-w-md">
        {tasks.map((task) => (
          <li key={task.task_id} className="flex justify-between items-center bg-white text-black font-semibold p-2 my-1 rounded">
            <span>
              {task.title} - {task.is_complete ? "✅" : "❌"}
            </span>
            <div className="flex gap-2">
              <button
                className="bg-yellow-500 text-white px-2 rounded"
                onClick={() => toggleComplete(task.task_id, task.is_complete)}
              >
                Toggle
              </button>
              <button
                className="bg-red-500 text-white px-2 rounded"
                onClick={() => deleteTask(task.task_id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
