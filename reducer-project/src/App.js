import React, { useState, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";

//
import Reducer from "./reducers/reducers";
import TodoList from "./components/TodoList";

function App() {
  const [testTasks, setTasks] = useState([
    { task: "task1", id: 55, completed: false },
    { task: "task2", id: 66, completed: false }
  ]);
  const newState = {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  };

  Reducer(testTasks, { type: "addTask", data: newState });
  const addTask = e => {
    e.preventDefault();
    const newTask = {
      id: Date.parse(new Date()),
      task: `task${Date.parse(new Date())}`,
      completed: false
    };
    setTasks({ ...testTasks, newTask });
  };

  return (
    <div className="App">
      <header className="App-header">
        <TodoList tasks={testTasks} />
      </header>
    </div>
  );
}

export default App;
