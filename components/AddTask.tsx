"use client";

import { useState } from "react";

export default function AddTask() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Call backend API to add task
    const res = await fetch("/api/add-task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    const data = await res.json();
    console.log("Added task:", data);

    setTitle(""); // clear input
    window.location.reload(); // refresh tasks list (simple way)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
