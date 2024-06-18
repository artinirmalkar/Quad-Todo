import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do Application</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
