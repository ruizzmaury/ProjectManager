import React from "react";
import "./App.css";
import { ProjectInput } from "./components/ProjectInput";
import "bootswatch/dist/lumen/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PROJECT MANAGER</h1>
      </header>

      <body className="App-body">
        {" "}
        <ProjectInput inputType="Title"></ProjectInput>
        <ProjectInput inputType="Description"></ProjectInput>
        <button>ADD PROJECT</button>
      </body>
    </div>
  );
}

export default App;
