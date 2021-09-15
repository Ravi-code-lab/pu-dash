import React from 'react'
import Simg from '../../../assets/images/Arun.png';
import '../Teachers/teachers.scss';

export default function Student({Sname, Smessage}) 
{
  return (
    <div className="teach">
      <div className="teachers-contener">
        <img src={Simg} alt="dddd" width="80px"/>
        <h3>{Sname}</h3>
        <p>{Smessage}</p>
        <i className="bi bi-geo-alt"></i>
       </div>
    </div>
  )
}
