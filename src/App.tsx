import MainContent from "./components/MainContent/MainContent";
import Nav from "./components/Nav/Nav";
import React, { useState } from "react";



const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <Nav addTask={addTask} />
      <MainContent tasks={tasks} />
    </div>
  );
};

export default App;