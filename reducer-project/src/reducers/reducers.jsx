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
      console.log("submit new");
      const newTask = {
        task: `${action.value}`,
        id: Date.parse(new Date()),
        completed: false
      };
      const newList = [...state.taskList, newTask];
      return {
        ...state,
        taskList: newList
      };
    case "toggleTask":
      const updatedStatus = state.taskList.map(e =>
        e.id === action.value ? { ...e, completed: !e.completed } : e
      );
      // console.log(updatedStatus, state);
      return {
        ...state,
        taskList: updatedStatus
      };
    // case "removeTask":
    //   console.log("remove task here");
    //   break;
    case "clearList":
      console.log(state.taskList);
      const completeList = state.taskList.filter(e => !e.completed);
      return { ...state, taskList: completeList };
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
