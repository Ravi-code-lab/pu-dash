import React, { useState } from 'react';
<<<<<<< HEAD
import Teachers from './Teachers/Teachers';
=======
import Teachers from '../Pages/Teachers/Teachers';
>>>>>>> 1f18491ece3d45d0afc9775f1fa46b05e6924ad0
import './Pages.scss';
export default function Pages() {
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
        <Teachers name={user.name} message={user.message}/>
        ))}
        </div>
        <div className="teachers-title">sss
          </div>
      </>
    )
}
