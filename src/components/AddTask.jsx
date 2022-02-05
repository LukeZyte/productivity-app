import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/AddTask.css';

export default function AddTask(props) {

    const handleColorSelection = (id) => {
        document.querySelector('#addTaskRedContainer').className = 'addTaskSkipedColor'
        document.querySelector('#addTaskOrangeContainer').className = 'addTaskSkipedColor'
        document.querySelector('#addTaskYellowContainer').className = 'addTaskSkipedColor'
        document.querySelector('#addTaskGreenContainer').className = 'addTaskSkipedColor'
        document.querySelector('#addTaskBlueContainer').className = 'addTaskSkipedColor'
        document.querySelector('#addTaskPurpleContainer').className = 'addTaskSkipedColor'
        document.querySelector(`#addTask${id}Container`).className = 'addTaskSelectedColor'
        props.setNewTaskMainColor(id)
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
                <br/><h3>Wybierz barwę zadania</h3>
                <div className="addTaskContainerColor">
                    <div id="addTaskRedContainer" className="addTaskSelectedColor">
                        <div id="addTaskRed" onClick={() => handleColorSelection("Red")}>

                        </div>
                    </div>
                    <div id="addTaskOrangeContainer" className="addTaskSkipedColor">
                        <div id="addTaskOrange" onClick={() => handleColorSelection("Orange")}>

                        </div>
                    </div>
                    <div id="addTaskYellowContainer" className="addTaskSkipedColor">
                        <div id="addTaskYellow" onClick={() => handleColorSelection("Yellow")}>

                        </div>
                    </div>
                    <div id="addTaskGreenContainer" className="addTaskSkipedColor">
                        <div id="addTaskGreen" onClick={() => handleColorSelection("Green")}>

                        </div>
                    </div>
                    <div id="addTaskBlueContainer" className="addTaskSkipedColor">
                        <div id="addTaskBlue" onClick={() => handleColorSelection("Blue")}>

                        </div>
                    </div>
                    <div id="addTaskPurpleContainer" className="addTaskSkipedColor">
                        <div id="addTaskPurple" onClick={() => handleColorSelection("Purple")}>

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