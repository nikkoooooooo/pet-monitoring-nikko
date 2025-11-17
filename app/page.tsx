"use client";
import { useState, useEffect } from "react";
import AddTask from "@/components/AddTask";
import PetCard from "@/components/PetCard";
import Swiftie from "@/public/IMG_20250430_203619.jpg"

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
    <div className="w-full h-auto bg-[url('/9f8db95e36a63537e4e5cefb10b8d941.jpg')] flex flex-col min-h-screen  items-center">


      <div className="w-full h-auto flex flex-col sm:flex-row justify-center gap-10 items-center mt-40 py-5">
        <PetCard 
          title='Swiftie'
          bDay="11/22/33"
          age={3}
          species="Cat"
          photo_url={Swiftie}


        />
           <PetCard 
          title='Swiftie'
          bDay="11/22/33"
          age={3}
          species="Cat"
          photo_url={Swiftie}


        />

           <PetCard 
          title='Swiftie'
          bDay="11/22/33"
          age={3}
          species="Cat"
          photo_url={Swiftie}


        />

           <PetCard 
          title='Swiftie'
          bDay="11/22/33"
          age={3}
          species="Cat"
          photo_url={Swiftie}


        />

           <PetCard 
          title='Swiftie'
          bDay="11/22/33"
          age={3}
          species="Cat"
          photo_url={Swiftie}


        />
      </div>

      {/* <AddTask />

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
      </ul> */}
    </div>
  );
}
