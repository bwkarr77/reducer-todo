import React from "react";

const Form = props => {
  const { state, dispatch } = props;
  const resetForm = () => {
    dispatch({
      type: "inputInfo",
      value: ""
    });
  };

  const addTask = e => {
    e.preventDefault();
    const value = e.target[0].value;
    !!value &&
      dispatch({
        value: value,
        type: "addTask"
      });
    resetForm();
  };
  const handleChange = e => {
    dispatch({
      type: "inputInfo",
      value: e.target.value
    });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={e => addTask(e)}>
        <input
          className="input-task"
          type="text"
          name="task"
          value={state.inputItem || ""}
          onChange={e => handleChange(e)}
          placeholder="Enter new task aqui"
        />
        <button className="button newTask">Submit Task</button>
      </form>
    </div>
  );
};

export default Form;
