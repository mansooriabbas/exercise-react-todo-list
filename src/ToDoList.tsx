import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState<{ text: string; done: boolean }[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, { text: newTask, done: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index: number) => {
    const updatedTasks = [...tasks];
    if (index > 0) {
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index: number) => {
    const updatedTasks = [...tasks];
    if (index < tasks.length - 1) {
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const markTaskDone = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, i) => (
          <li key={i}>
            <span className={task.done ? "text done" : "text"}>
              {task.text}
            </span>
            <button className="delete-button" onClick={() => deleteTask(i)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(i)}>
              UP
            </button>
            <button className="move-button" onClick={() => moveTaskDown(i)}>
              DOWN
            </button>
            <button className="mark-button" onClick={() => markTaskDone(i)}>
              DONE
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
