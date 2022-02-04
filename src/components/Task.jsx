import React from 'react';
import './Task.css';

export default function Task(props) {
    return (
        <div className='taskBody'>
            <div className='taskContainer'>
                <div className='taskTitle'>
                    {props.task.title}
                </div>
                <div className='taskContent'>
                    {props.task.desc}
                </div>
            </div>
        </div>
    )
}