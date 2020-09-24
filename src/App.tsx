import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greeting } from "./components/Greeting";

// const isNewToReact = false;
// const name: string = "Maury";

// const greeting = <div>Hello React</div>;

// function sayGreeting() {
//   if (isNewToReact) {
//     // ... or returned from functions, etc.
//     return greeting; // displays: Hello React
//   } else {
//     return (
//       <div>
//         <h1>KFUE</h1>
//         <div>Hi again {name}, welcome to React</div>
//         <input name="" />
//         <button className="submit-button">Submit</button>
//       </div>
//     );
//   }
// }



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {<Greeting name={"Maury"}/>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
