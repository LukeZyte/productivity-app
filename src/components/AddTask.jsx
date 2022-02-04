import React, { useState } from "react";
import { Link } from "react-router-dom";
import './AddTask.css';

export default function AddTask(props) {

    let [localTaskTitle, setLocalTaskTitle] = useState("")

    const handleTitleChange = () => {
        localTaskTitle = setLocalTaskTitle
    }

    return (
        <div className="addTaskBody">
            <div className="addTaskTitle">
                <h1>Dodaj nowe zadanie</h1>
            </div>
            <div className="addTaskContainer">
                <div className="addTaskContainerTitle">
                    <h3>Tytuł zadania</h3>
                    <input
                        id="inputTaskTitle"
                        type="text"
                        placeholder="Nowe zadanie"
                        onChange={e => {
                            props.setNewTaskTitle(e.target.value)
                            setLocalTaskTitle(e.target.value)
                            handleTitleChange()
                        }}
                    />
                </div>
                <div className="addTaskContainerDesc">
                    <h3>Opis zadania</h3>
                    <textarea
                        id="textareaTaskDesc"
                        type="text"
                        placeholder="Miejsce na opis"
                        onChange={e => props.setNewTaskDesc(e.target.value)}
                    />
                </div>
                {
                    localTaskTitle ?
                        <Link
                            to={"/"}
                            id="saveTaskButton"
                            onClick={props.handleAddTask}
                        >
                            <p>Zapisz</p>
                        </Link>
                        :
                        <div id="disabledSaveTaskButton">
                            <p>Zapisz</p>
                        </div>
                }
            </div>
        </div >
    )
}