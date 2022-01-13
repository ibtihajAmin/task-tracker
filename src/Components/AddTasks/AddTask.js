import React, { useState } from "react";

const AddTask = (props) => {
  const initialFormState = { id: null, name: "", doingDate: "" };

  const [task, setTask] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
    //console.log(name, value);
  };

  const handleUserInput = (e) => {
    e.preventDefault();
    if (!task.name) {
      alert("Please Provide Task Title");
      return;
    }
    if (!task.doingDate) {
      alert("Please Provide Task Deadline Date");
      return;
    }
    props.addTask(task);
    setTask(initialFormState);
    console.log(task.name, task.doingDate);
  };
  return (
    <div>
      <form onSubmit={handleUserInput}>
        <label for="exampleFormControlInput1" class="form-label">
          Enter Your Task
        </label>
        <input
          type="text"
          class="form-control w-75 mx-auto"
          onChange={handleInputChange}
          id="exampleFormControlInput1"
          placeholder="Task Title"
          name="name"
          value={task.name}
        />
        <label for="exampleFormControlInput1" class="form-label">
          Task Deadline
        </label>
        <input
          type="date"
          class="form-control w-75 mx-auto"
          onChange={handleInputChange}
          id="exampleFormControlInput1"
          placeholder="Task Assigned Date"
          name="doingDate"
          value={task.doingDate}
        />
        <button class="btn btn-success mt-2">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
