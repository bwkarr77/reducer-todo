import React, { useReducer } from "react";

import { Reducer, initialList } from "../reducers/reducers";

const TodoItem = props => {
  const [state, dispatch] = useReducer(Reducer, initialList);

  const handleToggle = e => {
    dispatch({
      type: "completeTask",
      value: props.task.id
    });
  };

  const itemIndex = props.index;
  return (
    <div
      className="todo-item"
      style={
        state.taskList[itemIndex].completed
          ? { textDecoration: "line-through" }
          : null
      }
      onClick={e => handleToggle(e)}
      // onClick={e => props.handleToggle(e)}
    >
      {props.task.task}
    </div>
  );
};

export default TodoItem;
