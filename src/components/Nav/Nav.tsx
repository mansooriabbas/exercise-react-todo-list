import React, { MouseEventHandler } from "react";
import "./nav.css";

interface NavProps {
  onColorChange: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Nav: React.FC<NavProps> = ({ onColorChange }) => {
  return (
    <nav>
      <label htmlFor="addTodo"></label>
      <input type="text" id="addTodo" />
      <button onClick={onColorChange}>Add Todo</button>
    </nav>
  );
};

export default Nav;
