import React, { useReducer } from "react";

import TodoItem from "./TodoItem";
import { Reducer, initialList } from "../reducers/reducers";
import Form from "./Form";
import { ListContext } from "../contexts/ListContext";

const TodoList = () => {
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
    <ListContext.Provider value={{ state, handleToggler, dispatch }}>
      <div>
        {state.taskList.map((each, index) => (
          <TodoItem key={each.id} index={index} />
        ))}
        <Form />
        <button className="list-clear" onClick={e => handleClear(e)}>
          Clear Completed
        </button>
      </div>
    </ListContext.Provider>
  );
};

export default TodoList;
