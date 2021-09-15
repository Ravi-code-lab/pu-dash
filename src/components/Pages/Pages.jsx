import React, { useState } from 'react';
<<<<<<< HEAD
import Teachers from './Teachers/Teachers';
=======
import Teachers from '../Teachers/Teachers';
>>>>>>> 6251541c8ba6d1309774bdefefb71800b9853216
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
