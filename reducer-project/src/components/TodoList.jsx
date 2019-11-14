import React, { useReducer } from "react";

import TodoItem from "./TodoItem";
import { Reducer, initialList } from "../reducers/reducers";
// import { TodoInitial, TodoNew } from "../data";
import Form from "./Form";

const TodoList = props => {
  const [state, dispatch] = useReducer(Reducer, initialList);
  console.log(state);

  console.log(state.taskList);
  return (
    <div>
      {state.taskList.map(each => (
        <TodoItem task={each} />
      ))}
      <Form state={state} dispatch={dispatch} />
    </div>
  );
};

export default TodoList;
