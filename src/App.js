import { useState } from "react";
import "./App.css";
import TasksListTable from "./Components/TasksListTable/TasksListTable";

function App() {
  const tasksList = [
    { id: 1, name: "Playing Cricket", doingDate: "11/1/2022" },
    { id: 2, name: "Watch Squid Games", doingDate: "12/1/2022" },
    { id: 3, name: "Meet With Friends", doingDate: "13/1/2022" },
    { id: 4, name: "Reading Novel", doingDate: "14/1/2022" },
  ];

  const [tasks, setTasks] = useState(tasksList);
  return (
    <div className="App">
      <h1 className="text-center mt-3 mb-2">
        <span className="text-info">Task</span>
        <span className="text-primary ms-2">Tracker</span>
      </h1>
      <div class="row align-items-start mt-5">
        <div class="col">
          <h3>Add Task</h3>
        </div>
        <div class="col me-3">
          <h3>Your Added Tasks</h3>
          <TasksListTable tasks={tasks}></TasksListTable>
        </div>
      </div>
    </div>
  );
}

export default App;
