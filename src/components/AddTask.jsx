import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/AddTask.css';

export default function AddTask(props) {

    const handleColorSelection = (id) => {
        console.log(id);
        
    }

    // Fikolek zwiazany z blokowaniem zapisu przy pustym input Title
    let [localTaskTitle, setLocalTaskTitle] = useState("")

    const handleTitleChange = () => {
        localTaskTitle = setLocalTaskTitle
    }

    const clearInputValues = () => {
        props.setNewTaskTitle("")
        props.setNewTaskDesc("")
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
                        value={props.newTaskTitle}
                    />
                </div>
                <div className="addTaskContainerDesc">
                    <h3>Opis zadania</h3>
                    <textarea
                        id="textareaTaskDesc"
                        type="text"
                        placeholder="Miejsce na opis"
                        onChange={e => props.setNewTaskDesc(e.target.value)}
                        value={props.newTaskDesc}
                    />
                </div>
                <div className="addTaskContainerColor">
                    <div className="addTaskSelectedColor">
                        <div id="addTaskRed" onClick={() => handleColorSelection("addTaskRed")}>

                        </div>
                    </div>
                    <div className="addTaskSkipedColor">
                        <div id="addTaskOrange" className="addTaskColorPalette">

                        </div>
                    </div>
                    <div className="addTaskSkipedColor">
                        <div id="addTaskYellow" className="addTaskColorPalette">

                        </div>
                    </div>
                    <div className="addTaskSkipedColor">
                        <div id="addTaskGreen" className="addTaskColorPalette">

                        </div>
                    </div>
                    <div className="addTaskSkipedColor">
                        <div id="addTaskBlue">

                        </div>
                    </div>
                    <div className="addTaskSkipedColor">
                        <div id="addTaskPurple">

                        </div>
                    </div>

                </div>
                <div className="addTaskButtons">
                    <Link 
                        className="backButton" 
                        to={"/"}
                        onClick={clearInputValues}
                    >
                        Wstecz
                    </Link>
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
            </div>
        </div >
    )
}