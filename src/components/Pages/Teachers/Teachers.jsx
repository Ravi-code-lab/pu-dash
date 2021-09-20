import React from 'react'
import { teachers } from '../../Import';
import './teachers.scss';

export default function Teachers({ name, message,}) {
 
  return (
    <div className="teach">
      <div className="teachers-contener">
        <img src={teachers} alt="dddd" width="80px"/>
        <h3>{name}</h3>
        <p>{message}</p>
        <i className="bi bi-geo-alt"></i>
       </div>
    </div>
  )
}
