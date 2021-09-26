import {React, useState} from 'react'
import { teachers } from '../../../Import';
import './teachers.scss';

export default function Teachers() {
  const [users] = useState([
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
    {name: "ddfhjadhf", message: "ddfhjadhf"},
  ])
  
  return (
    <>
       <div className="teachers-title">sss
          </div>
        <div className="row">
          {users.map(user =>(
        <div className="teach">
        <div className="teachers-contener">
          <img src={teachers} alt="dddd" width="80px"/>
          <h3>{user.name}</h3>
          <p>{user.message}</p>
          <i className="bi bi-geo-alt"></i>
          </div>
        </div>
        ))}
        </div>
        <div className="teachers-title">sss
          </div>
      </>
    
  )
}
