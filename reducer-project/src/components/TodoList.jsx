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
    console.log("toggleTask", taskEach);
    const currentId = taskEach.id;
    console.log("toggleTask", currentId, state.taskList[currentId]);
    dispatch({
      type: "toggleTask",
      value: currentId
    });
  };

  console.log("todoList: ", state.taskList);
  return (
    <div>
      {state.taskList.map((each, index) => {
        return (
          <div>
            {/* {console.log("task:", each)} */}
            <TodoItem
              task={each}
              key={each.id}
              index={index}
              handleToggler={handleToggler}
            />
          </div>
        );
      })}
      <Form state={state} dispatch={dispatch} />
      <button className="list-clear" onClick={e => handleClear(e)}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
