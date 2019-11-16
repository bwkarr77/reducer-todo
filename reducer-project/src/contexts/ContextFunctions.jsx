import React, { useReducer, useContext } from "react";
import { Reducer, initialList } from "../reducers/reducers";
import { ListContext } from "../contexts/ListContext";

const { state, dispatch } = useContext(ListContext);

const resetForm = () => {
  dispatch({
    type: "inputInfo",
    value: ""
  });
};

export const handleClearA = e => {
  e.preventDefault();
  dispatch({
    type: "clearList",
    value: state
  });
};

export const handleTogglerA = taskEach => {
  const currentId = taskEach.id;
  dispatch({
    type: "toggleTask",
    value: currentId
  });
};

export const resetFormA = () => {
  dispatch({
    type: "inputInfo",
    value: ""
  });
};

export const addTaskA = e => {
  e.preventDefault();
  const value = e.target[0].value;
  !!value &&
    dispatch({
      value: value,
      type: "addTask"
    });
  resetForm();
};

export const handleChangeA = e => {
  dispatch({
    type: "inputInfo",
    value: e.target.value
  });
};
