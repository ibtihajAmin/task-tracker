import { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTasks/AddTask";
import TasksListTable from "./Components/TasksListTable/TasksListTable";

function App() {
  const tasksList = [
    { id: 1, name: "Playing Cricket", doingDate: "1/11/2022" },
    { id: 2, name: "Watch Squid Games", doingDate: "1/12/2022" },
    { id: 3, name: "Meet With Friends", doingDate: "1/13/2022" },
    { id: 4, name: "Reading Novel", doingDate: "1/14/2022" },
  ];

  const [tasks, setTasks] = useState(tasksList);

  const addTask = (task) => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1 className="text-center mt-3 mb-2">
        <span className="text-info">Task</span>
        <span className="text-primary ms-2">Tracker</span>
      </h1>
      <div class="row align-items-start mt-5">
        <div class="col">
          <h3 className="mb-3">Add Task</h3>
          <AddTask addTask={addTask}></AddTask>
        </div>
        <div class="col me-3">
          <h3>Your Added Tasks</h3>
          <TasksListTable
            tasks={tasks}
            deleteTask={deleteTask}
          ></TasksListTable>
        </div>
      </div>
    </div>
  );
}

export default App;
