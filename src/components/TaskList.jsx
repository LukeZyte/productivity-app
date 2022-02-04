import React from 'react';
import Task from './Task.jsx'
import './TaskList.css'

export default function TaskList(props) {

    return (
        <>
            <div className='taskListTopBar'>
                <h1>Lista wszystkich zadań</h1>
            </div>

            <div className='taskList'>
                {
                    props.tasks.map((task, key) => {
                        return (
                            <Task
                                key={key}
                                task={task}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

