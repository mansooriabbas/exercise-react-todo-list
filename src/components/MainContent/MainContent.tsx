import React from "react";
import "./MainContent.css";

interface MainContentProps {
  tasks: string[];
}

const MainContent: React.FC<MainContentProps> = ({ tasks }): JSX.Element => {
  return (
    <main className="main-content">
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </main>
  );
};

export default MainContent;
