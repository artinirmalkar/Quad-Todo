import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../store/features/taskSlice";
import { useState } from "react";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState(null);
  const [taskText, setTaskText] = useState("");

  const handleEdit = (task) => {
    setEditingTask(task.id);
    setTaskText(task.text);
  };

  const handleSave = (taskId) => {
    dispatch(editTask({ id: taskId, newText: taskText }));
    setEditingTask(null);
    setTaskText("");
  };

  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
            className="mr-2"
          />
          {editingTask === task.id ? (
            <input
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              className="mr-2 p-1 border border-gray-300 rounded"
            />
          ) : (
            <span className={`flex-1 ${task.completed ? "line-through" : ""}`}>
              {task.text}
            </span>
          )}
          {editingTask === task.id ? (
            <button
              onClick={() => handleSave(task.id)}
              className="bg-blue-500 text-white p-1 rounded"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => handleEdit(task)}
              className="bg-yellow-500 text-white p-1 rounded mr-2"
            >
              Edit
            </button>
          )}
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="bg-red-500 text-white p-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
