import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState<{ text: string; done: boolean }[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [isEditing, setIsEditing] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = e.target.value;
    setTasks(updatedTasks);
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

  const editTask = (index: number) => {
    setIsEditing((prevVal) => (prevVal === index ? null : index));
  };

  return (
    <div className="to-do-list">
      <div className="title-container">
        <h1>Task Master</h1>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); addTask(); }}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="add-button" type="submit">
            <span className="material-symbols-outlined">add_task</span>
          </button>
        </div>
      </form>

      <ol>
        {tasks.map((task, i) => (
          <li key={i}>
            {isEditing === i ? (
              <input
                onChange={(e) => handleInputChange(e, i)}
                value={task.text}
                type="text"
              />
            ) : (
              <span className={task.done ? "text done" : "text"}>
                {task.text}
              </span>
            )}

            <button className="delete-button" onClick={() => deleteTask(i)}>
              <span className="material-symbols-outlined">delete</span>
            </button>
            <button className="move-button" onClick={() => moveTaskUp(i)}>
              <span className="material-symbols-outlined">arrow_upward</span>
            </button>
            <button className="move-button" onClick={() => moveTaskDown(i)}>
              <span className="material-symbols-outlined">arrow_downward</span>
            </button>
            <button className="mark-button" onClick={() => markTaskDone(i)}>
              <span className="material-symbols-outlined">check</span>
            </button>
            <button className="edit-button" onClick={() => editTask(i)}>
              {isEditing === i ? (
                <span className="material-symbols-outlined">save</span>
              ) : (
                <span className="material-symbols-outlined">edit</span>
              )}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
