import React from "react";

const TasksListTable = (props) => {
  return (
    <div>
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.doingDate}</td>
              <td>
                <button type="button" class="btn btn-outline-warning me-3">
                  Edit
                </button>
                <button type="button" class="btn btn-outline-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TasksListTable;
