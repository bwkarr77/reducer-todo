import React, { useContext } from "react";

import { ListContext } from "../contexts/ListContext";

const TodoItem = props => {
  const { state, handleToggler } = useContext(ListContext);
  const currentItem = state.taskList[props.index];
  return (
    <div
      className="todo-item"
      style={currentItem.completed ? { textDecoration: "line-through" } : null}
      onClick={e => handleToggler(currentItem)}
    >
      {currentItem.task}
    </div>
  );
};

export default TodoItem;
