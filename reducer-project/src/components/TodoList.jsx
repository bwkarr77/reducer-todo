import React, { useReducer } from "react";

import TodoItem from "./TodoItem";
import { Reducer, initialList } from "../reducers/reducers";
import Form from "./Form";

const TodoList = props => {
  const [state, dispatch] = useReducer(Reducer, initialList);

  const handleClear = e => {
    e.preventDefault();
    dispatch({
      type: "clearList",
      value: state
    });
  };
  const handleToggler = taskEach => {
    const currentId = taskEach.id;
    dispatch({
      type: "toggleTask",
      value: currentId
    });
  };

  console.log("todoList: ", state.taskList);
  return (
    <div>
      {state.taskList.map((each, index) => (
        <TodoItem
          task={each}
          key={each.id}
          index={index}
          handleToggler={handleToggler}
        />
      ))}
      <Form state={state} dispatch={dispatch} />
      <button className="list-clear" onClick={e => handleClear(e)}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
