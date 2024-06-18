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
    <div className="mt-4">
      <input
        type="text"
        placeholder="Enter a new task"
        value={taskText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="p-2 border border-gray-300 rounded mr-2"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
