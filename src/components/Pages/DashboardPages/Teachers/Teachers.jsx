import {React, useState} from 'react'
import { teachers } from '../../../Import';
import './teachers.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography' ;
import CardContent from '@mui/material/CardContent';


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
            <Card variant="outlined">
              <CardContent>
                <Typography>
                  Arun
                </Typography>
              </CardContent>

            </Card>
        ))}
        </div>
        <div className="teachers-title">
          </div>
      </>
    
  )
}
