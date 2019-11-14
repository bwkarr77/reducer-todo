import React, { useState, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";

//
import { TodoInitial, TodoNew } from "./data";
import { Reducer, initialList } from "./reducers/reducers";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

function App() {
  console.log(TodoInitial, TodoNew);
  const [testTasks, setTasks] = useState([
    { task: "task1", id: 55, completed: false },
    { task: "task2", id: 66, completed: false }
  ]);
  const newState = {
    task: "Learn about reducers",
    completed: false,
    id: 3892987589
  };

  // Reducer(testTasks, { type: "addTask", data: newState });
  // Reducer(TodoInitial, { type: "addTask", data: initialList });

  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
        {/* <Form state={testTasks} dispatch={}/> */}
      </header>
    </div>
  );
}

export default App;
