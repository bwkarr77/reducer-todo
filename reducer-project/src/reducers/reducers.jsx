import React, { useReducer } from "react";

const Reducer = (stateIn, action) => {
  // if (action.type === "addTask") {
  //   console.log(action.data);
  // } else {
  //   console.log(stateIn);
  // }
  // return stateIn;

  //
  switch (action.type) {
    case "addTask":
      console.log(action.data);
      break;
    //     return {};
    case "removeTask":
      console.log(stateIn);
      break;
  }
  return { stateIn };
};

export default Reducer;

const reducer = (state, action) => {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  } else if (action.type === "decrement") {
    return { count: state.count - 1 };
  }
};
