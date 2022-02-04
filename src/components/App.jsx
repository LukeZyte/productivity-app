import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import TaskList from './TaskList.jsx';
import AddTask from './AddTask.jsx';

export default function App() {

  const [tasks, setTasks] = useState([])

  const [newTaskTitle, setNewTaskTitle] = useState("")
  const [newTaskDesc, setNewTaskDesc] = useState("")

  const handleAddTask = (props) => {
    const newTask = {
      title: newTaskTitle,
      desc: newTaskDesc,
    }
    setTasks(oldTasks => [...oldTasks, newTask])
  }

  return (
    <>
      <Header />

      <Routes>
        <Route
          path={"/"}
          element={<TaskList tasks={tasks} />}
        />
        <Route
          path={"/addTask"}
          element={<AddTask
            handleAddTask={handleAddTask}
            setNewTaskTitle={setNewTaskTitle}
            setNewTaskDesc={setNewTaskDesc} />}
        />
      </Routes>

      <Footer />
    </>
  )
}