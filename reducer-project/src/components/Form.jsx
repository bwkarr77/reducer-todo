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
    // alert("hello");
    e.preventDefault();
    console.log("addTask ran");
    const value = e.target[0].value;
    !!value &&
      dispatch({
        value: value,
        type: "addTask"
      });
    resetForm();

    // const newTask = {
    //   id: Date.parse(new Date()),
    //   task: `task${Date.parse(new Date())}`,
    //   completed: false
    // };
    // setTasks({ ...testTasks, newTask });
  };
  const handleChange = e => {
    console.log("handleChange ran");
    dispatch({
      type: "inputInfo",
      value: e.target.value
    });
  };

  console.log(state.taskList);
  return (
    <div className="form-container">
      {/* <form className="form" onSubmit={e => addTask(e)}> */}
      <form
        className="form"
        onSubmit={e => {
          //   addTask(e);
          e.preventDefault();
          const value = e.target[0].value;
          !!value &&
            dispatch({
              value: `${value}`,
              type: "addTask"
            });
          resetForm();
        }}
      >
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
