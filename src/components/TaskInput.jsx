import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../store/features/taskSlice";

const TaskInput = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      const newTask = {
        id: uuidv4(),
        text: taskText,
        completed: false,
      };
      dispatch(addTask(newTask));
      setTaskText("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="mt-4 w-full flex justify-between">
      <input
        type="text"
        placeholder="Add New Task (e.g. Creating a todo application)"
        value={taskText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="p-1 px-5 border border-gray-300 text-black  text-sm w-full"
      />
      <button
        onClick={handleAddTask}
        className="text-sm font-bold bg-blue-950 text-white p-2   uppercase w-20"
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
