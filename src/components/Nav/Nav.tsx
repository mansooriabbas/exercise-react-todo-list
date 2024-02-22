import React, { useState, MouseEventHandler, ChangeEventHandler } from "react";
import "./Nav.css";

interface NavProps {
  addTask: (task: string) => void;
}

const Nav: React.FC<NavProps> = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState<string>("");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTaskInput(event.target.value);
  };

  const handleAddTask: MouseEventHandler<HTMLButtonElement> = () => {
    if (taskInput.trim() !== "") {
      addTask(taskInput);
      setTaskInput("");
    }
  };

  return (
    <nav>
      <label htmlFor="addTodo"></label>
      <input
        type="text"
        id="addTodo"
        value={taskInput}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Add Todo</button>
    </nav>
  );
};

export default Nav;
