import React, { useReducer } from "react";

export const initialList = {
  taskItem: "",
  taskList: [
    { task: "Bunny Rabbits", id: 55, completed: false },
    { task: "task2", id: 66, completed: false }
  ]
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "inputInfo":
      return {
        ...state,
        inputItem: action.value
      };
    case "addTask":
      console.log("submit new task...");
      const newTask = {
        id: Date.parse(new Date()),
        task: `${action.value}`,
        completed: false
      };
      const newList = [...state.taskList, newTask];
      console.log(newList, action);
      alert("check console");
      return {
        ...state,
        taskList: newList
      };
      break;
    //     return {};
    case "removeTask":
      console.log("remove task here");
      break;
    case "clearList":
      console.log("clear list");
      break;
    case "completeTask":
      console.log("complete here");
      break;
    default:
      console.log('"else" here', action);
  }
  return { state };
};

export const reducer = (state, action) => {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  } else if (action.type === "decrement") {
    return { count: state.count - 1 };
  }
};
