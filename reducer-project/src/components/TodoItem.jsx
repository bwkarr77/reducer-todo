import React, { useReducer } from "react";

import { Reducer, initialList } from "../reducers/reducers";

const TodoItem = props => {
  const [state, dispatch] = useReducer(Reducer, initialList);
  const itemIndex = props.index;

  console.log(props.task);
  return (
    <div
      id={props.id}
      className="todo-item"
      style={props.task.completed ? { textDecoration: "line-through" } : null}
      // onClick={e => handleToggle(e)}
      onClick={e => props.handleToggler(state.taskList[itemIndex])}
    >
      {props.task.task}
    </div>
  );
};

export default TodoItem;
