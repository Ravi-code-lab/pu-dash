import React from 'react';
import './sidebar.scss'
import {Event,Ebooks,deshboard,Teacher,Student,MyClass,puicon,puiconname} from "../Import"
import { Link } from 'react-router-dom';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <Link className="sidebar-logo" to="/">
                <div className="sidebar-item-logo">
                    <img src={puicon} alt=""/>
                </div>
                <div className="sidebar-item-logo">
                    <img src={puiconname} alt=""/>
                </div>
            </Link>
                <h2>Main Menu</h2>
            <Link className="sidebar-item" to="/">
                <div className="sidebar-item-icon"><img src={deshboard} alt=""/>
                 </div>
                <div className="sidebar-item-text">Deshbord</div>
            </Link>
            <Link className="sidebar-item" to="/MyClass">
                <div className="sidebar-item-icon"><img src={MyClass} alt=""/></div>
                <div className="sidebar-item-text">My Class</div>
            </Link>
            <Link className="sidebar-item" to="/Ebook">
                <div className="sidebar-item-icon"><img src={Ebooks} alt=""/></div>
                <div className="sidebar-item-text">Ebooks</div>
            </Link>
            <Link className="sidebar-item" to="/Student">
                <div className="sidebar-item-icon"><img src={Student} alt=""/></div>
                <div className="sidebar-item-text">Student</div>
            </Link>
            <Link className="sidebar-item" to="/Teachers">
                <div className="sidebar-item-icon"><img src={Teacher} alt=""/></div>
                <div className="sidebar-item-text">Teachers</div>
            </Link>
            <Link className="sidebar-item" to="/Event">
                <div className="sidebar-item-icon"><img src={Event} alt=""/></div>
                <div className="sidebar-item-text">Event</div>
            </Link>
       </div>
    )
}
