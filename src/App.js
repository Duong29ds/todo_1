import { React, useState } from "react";
import "./App.css";
import TaskList from "./User/components/ToDoList/TaskList";
import Task from "./User/components/ToDoList/Task";
import FormTaskNew from "./User/components/ToDoList/FormTaskNew";
import RadioButton from "./User/components/ui/RadioButton";

function App() {
  const [statusTask, setStatusTask] = useState("All");
  let [taskArray, setTaskArray] = useState([
    {
      id: "t1",
      description: "Coding",
      completed: false,
    },
    {
      id: "t2",
      description: "Reading",
      completed: false,
    },
    {
      id: "t3",
      description: "Play game",
      completed: false,
    },
    {
      id: "t4",
      description: "Eat",
      completed: false,
    },
  ]);
  const getStatusHandler = (status) => {
    setStatusTask(status);
  };

  const handleAddTask = (newTask) => {
    setTaskArray((oldTasks) => [...oldTasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    DUMMY_DATA = taskArray.filter((task) => task.id !== id);
    setTaskArray([...DUMMY_DATA]);
  };

  const handleEditTask = (description, id) => {
    DUMMY_DATA = taskArray.map((task) => {
      if (task.id === id) {
        task.description = description;
      }
      return task;
    });
    setTaskArray([...DUMMY_DATA]);
  };

  let DUMMY_DATA;
  const handleChangeComplete = (complete, id) => {
    DUMMY_DATA = taskArray.map((task) => {
      if (task.id === id) {
        task.completed = complete;
        return task;
      }
      return task;
    });
  };

  if (statusTask === "Completed") {
    DUMMY_DATA = taskArray.filter((task) => task.completed === true);
  } else if (statusTask === "Not-Complete") {
    DUMMY_DATA = taskArray.filter((task) => task.completed === false);
  } else {
    DUMMY_DATA = taskArray;
  }
  console.log(DUMMY_DATA);

  return (
    <div className="App">
      <div>
        <h1 className="header">TODO APP</h1>
        <FormTaskNew addTask={handleAddTask} />
        <TaskList>
          {DUMMY_DATA.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              description={task.description}
              completed={task.completed}
              handleChangeComplete={handleChangeComplete}
              deleteTask={handleDeleteTask}
              editTask={handleEditTask}
            />
          ))}
        </TaskList>
        <div className="radios">
          <RadioButton getStatus={getStatusHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
