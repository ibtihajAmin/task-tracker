import React, { useState } from "react";

const EditTask = (props) => {
  const [task, setTask] = useState(props.currentTask);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleUpdateTaskData = (e) => {
    e.preventDefault();
    props.updateTask(task.id, task);
  };

  return (
    <div>
      <form onSubmit={handleUpdateTaskData}>
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
        <button class="btn btn-success mt-2">Update Task</button>
        <button
          class="btn btn-danger mt-2 ms-2"
          onClick={() => props.setEditing(false)}
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default EditTask;
