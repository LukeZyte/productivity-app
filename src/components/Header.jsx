import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

export default function Header(props) {
    return (
        <div className="headerBar">
            <div className="headerTitle">
                My Productivity App
            </div>
            <div className='headerMenu'>
                <Link to="/addTask" id='addTaskButton'>
                    ✚ Dodaj zadanie
                </Link>
            </div>
        </div>
    )
}