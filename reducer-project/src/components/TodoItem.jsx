import React, { useReducer } from "react";

import { Reducer, initialList } from "../reducers/reducers";

const TodoItem = props => {
  return (
    <div
      className="todo-item"
      style={props.task.completed ? { textDecoration: "line-through" } : null}
      onClick={e => props.handleToggler(props.task)}
    >
      {props.task.task}
    </div>
  );
};

export default TodoItem;
