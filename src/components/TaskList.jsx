import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, editTask, toggleTask } from "../store/features/taskSlice";
import { useState } from "react";

const TaskList = () => {
  const { tasks } = useSelector((state) => state.tasks);
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
    <div className="mt-4 h-screen overflow-auto">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex flex-wrap gap-3 w-full  justify-between mb-2 bg-white border shadow-md py-2 px-2 lg:px-10"
        >
          <div className="flex gap-1 w-full">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
              className="mr-5 rounded-none"
            />
            {editingTask === task.id ? (
              <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                className="mr-2 p-1 border border-gray-300 rounded  w-full text-sm text-slate-700"
              />
            ) : (
              <span
                className={`text-sm font-bold text-slate-700 capitalize  ${
                  task.completed ? "line-through" : ""
                }`}
              >
                {task.text}
              </span>
            )}
          </div>
          <div>
            {editingTask === task.id ? (
              <button
                onClick={() => handleSave(task.id)}
                className="border-2 border-blue-950 text-blue-950 px-5 py-0.5 text-xs font-bold rounded-2xl mr-2 hover:bg-blue-950 hover:text-white uppercase"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(task)}
                className="border-2 border-blue-950 text-blue-950 px-5 py-0.5 text-xs font-bold rounded-2xl mr-2 hover:bg-blue-950 hover:text-white uppercase"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="border-2 border-red-700 text-red-700 px-5 py-0.5 text-xs font-bold rounded-2xl hover:bg-red-700 hover:text-white uppercase"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
