import React from "react";
import TaskInput from "./components/TaskInput";
import ColumnCollection from "./components/ColumnCollection";
import "./App.css";

import "bootswatch/dist/lumen/bootstrap.min.css";
import TasksColumn from "./components/TasksColumn";


function App(): JSX.Element {
  return (
    <div className="App">
      <TaskInput />
      <ColumnCollection />
      <TasksColumn />
    </div>
  );
}

export default App;
