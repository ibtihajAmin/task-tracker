import { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTasks/AddTask";
import EditTask from "./Components/EditTask/EditTask";
import TasksListTable from "./Components/TasksListTable/TasksListTable";

function App() {
  const tasksList = [
    { id: 1, name: "Playing Cricket", doingDate: "1/11/2022" },
    { id: 2, name: "Watch Squid Games", doingDate: "1/12/2022" },
    { id: 3, name: "Meet With Friends", doingDate: "1/13/2022" },
    { id: 4, name: "Reading Novel", doingDate: "1/14/2022" },
  ];

  const [tasks, setTasks] = useState(tasksList);
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", doingDate: "" };
  const [currentTask, setCurrentTask] = useState(initialFormState);

  const addTask = (task) => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editRow = (task) => {
    setEditing(true);
    setCurrentTask({ id: task.id, name: task.name, doingDate: task.doingDate });
  };

  const updateTask = (id, updateTask) => {
    setEditing(false);
    setTasks(tasks.map((task) => (task.id === id ? updateTask : task)));
  };

  return (
    <div className="App">
      <h1 className="text-center mt-3 mb-2">
        <span className="text-info">Task</span>
        <span className="text-primary ms-2">Tracker</span>
      </h1>
      <div class="row align-items-start mt-5">
        <div class="col">
          {editing ? (
            <div>
              <h2>Edit Task</h2>
              <EditTask
                setEditing={setEditing}
                currentTask={currentTask}
                updateTask={updateTask}
              ></EditTask>
            </div>
          ) : (
            <div>
              <h3 className="mb-3">Add Task</h3>
              <AddTask addTask={addTask}></AddTask>
            </div>
          )}
        </div>
        <div class="col me-3">
          <h3>Your Added Tasks</h3>
          <TasksListTable
            tasks={tasks}
            editRow={editRow}
            deleteTask={deleteTask}
          ></TasksListTable>
        </div>
      </div>
    </div>
  );
}

export default App;
