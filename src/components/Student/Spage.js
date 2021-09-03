import React, { useState } from 'react';
import '../Pages/Pages.scss';
import Student from './Student';
export default function Spage() {
    const [users] = useState([
        {Sname: "ddfhjadhf", Smessage: "ddfhjadhf"},
      ])
    return (
      <>
       <div className="teachers-title">sss
          </div>
        <div className="row">
          {users.map(user =>(
            <Student Sname={user.Sname} Smessage={user.Smessage}/>
          ))}
          {/* {users.map(user =>(
        <Teachers name={user.Sname} message={user.Smessage}/>
        ))} */}
        </div>
        <div className="teachers-title">sss
          </div>
      </>
    )
}
