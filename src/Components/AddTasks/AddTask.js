import React from "react";

const AddTask = () => {
  return (
    <div>
      <form>
        <label for="exampleFormControlInput1" class="form-label">
          Enter Your Task
        </label>
        <input
          type="text"
          class="form-control w-75 mx-auto"
          id="exampleFormControlInput1"
          placeholder="Task Title"
        />
        <label for="exampleFormControlInput1" class="form-label">
          Task Deadline
        </label>
        <input
          type="date"
          class="form-control w-75 mx-auto"
          id="exampleFormControlInput1"
          placeholder="Task Assigned Date"
        />
      </form>
      <button class="btn btn-success mt-2">Add Task</button>
    </div>
  );
};

export default AddTask;
