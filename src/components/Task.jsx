import React from 'react';
import '../styles/Task.css';

import { FaRegPaperPlane } from "react-icons/fa";

export default function Task(props) {

    return (
        <div className='taskBody'>
            <div className='taskContainer'>
                <div className='taskLeftContainer'>
                    <div className='taskTitle'>
                        {props.task.title} <FaRegPaperPlane/>
                    </div>
                    <div className='taskContent'>
                        {props.task.desc}
                    </div>
                </div>
                <div className='taskRightContainer'>
                    <p>Zamieszczono</p>
                    <p>{props.task.postedDate}</p>
                </div>
            </div>
        </div>
    )
}