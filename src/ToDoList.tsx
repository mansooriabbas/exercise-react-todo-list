import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "Get the paper",
    "Buy that thing",
    "Buy the other thing",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {};

  const deleteTask = (index) => {};

  const MoveTaskUp = (index) => {};

  const MoveTaskDown = (index) => {};

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
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(i)}>
              Delete
            </button>
            <button className="move-button" onClick={() => MoveTaskUp(i)}>
              UP
            </button>
            <button className="move-button" onClick={() => MoveTaskDown(i)}>
              DOWN
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
