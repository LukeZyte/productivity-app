import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import '../styles/App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import TaskList from './TaskList.jsx';
import AddTask from './AddTask.jsx';

export default function App() {

  const [tasks, setTasks] = useState([
    {
      title: "Testowy",
      desc: "to dziala gituwa",
      postedDate: "4 lutego 2022, 22:11:48",
      mainColor: "green"
    },
    {
      title: "Ej mega",
      desc: "gituwa dziala UwU",
      postedDate: "3 lutego 2022, 22:13:52",
      mainColor: "red"
    }
  ])

  const [newTaskTitle, setNewTaskTitle] = useState("")
  const [newTaskDesc, setNewTaskDesc] = useState("")

  const date = new Date();
    // returns example: '4 lutego 2022, 22:11:48'
    let newTaskPostedDate = date.toLocaleString(undefined, {
        day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"
    });

  // Dodawanie nowego elementu task, zerowanie zawartosci inputow
  const handleAddTask = (props) => {
    const newTask = {
      title: newTaskTitle,
      desc: newTaskDesc,
      postedDate: newTaskPostedDate,
      // mainColor: newTaskMainColor
    }
    setTasks(oldTasks => [...oldTasks, newTask])
    setNewTaskTitle("")
    setNewTaskDesc("")
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
            setNewTaskDesc={setNewTaskDesc} 
            />}
        />
      </Routes>

      <Footer />
    </>
  )
}