import React from "react";
import "./App.css";

//
import { TodoInitial, TodoNew } from "./data";
import TodoList from "./components/TodoList";

function App() {
  console.log(TodoInitial, TodoNew);
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;
