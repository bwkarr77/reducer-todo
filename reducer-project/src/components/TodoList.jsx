import React from "react";

import TodoItem from "./TodoItem";

const TodoList = props => {
  const taskList = props.tasks;
  console.log(taskList);
  return (
    <div>
      {taskList.map(each => (
        <TodoItem task={each} />
      ))}
    </div>
  );
};

export default TodoList;
