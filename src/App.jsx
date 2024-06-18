import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div className="p-5 lg:p-10 w-full fixed top-0  h-48 lg:h-40 bg- border-b bg-slate-950 text-white">
        <h1 className="text-2xl font-bold mb-4 text-center my-5 uppercase">
          To-Do Application
        </h1>
        <TaskInput />
      </div>
      <div className=" mt-48 lg:mt-40 px-5 lg:px-10  py-5 w-full bg-slate-900 text-white">
        <TaskList />
      </div>
    </>
  );
}

export default App;
