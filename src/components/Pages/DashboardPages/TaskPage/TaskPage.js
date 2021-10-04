import { React, useState } from 'react'
import { FormGroup, FormControlLabel,FormControl, InputLabel, Select, MenuItem, CardHeader, Card, CardActions, CardContent, Grid, Typography, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Checkbox } from '@mui/material'
import {Timestamp, getDocs,doc,arrayUnion, query, collection, updateDoc } from '@firebase/firestore';
import { db,auth } from '../../../../services/firebase';
import { userData } from '../../Registration/RegisterationForm';
import { AddSharp } from '@mui/icons-material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';


export let todo = [];
export let comp = [];
export let isTodoLoaded = false;

function getTodoList() {
    let todoList = [];
    userData.todo.ownTask.todo.map()
    return
}

function getTodoCompList() {

}


export default function TaskPage() {

    //for form dilog opening
    const [openTodoForm, setOpenTodoForm] = useState(false);
    const [dueDate, setDueDate] = useState(null);
    const [allowText, setallowText] = useState(false);
    const [allowAttachment, setallowAttachment] = useState(false);

    const handleDueDateChange = (newValue) => {
        setDueDate(newValue);
    };
    const [age, setAge] = useState('');

    const todoFormSubmit = async (e) =>{
        e.preventDefault();
        const form = document.querySelector("#add-todo-form");
        let docId = auth.currentUser.email.split('@');
        docId.pop();
        docId = docId.join();
        console.log(docId);
        console.log(form.regno);
        const stdDoc= doc(db,'students',docId);
        const todo={
                taskid:Timestamp.fromDate(Date()),
                task:form.title.value,
                des:form.des.value,
                attachment:['test_txt.txt'],
                dueDate:Timestamp.fromDate(Date(dueDate)),
                submitted:false,
                submitDate:Timestamp.fromDate(Date()),
                priority:form.priority.value,
                allowAttachment:allowAttachment,
                allowText:allowText
        }
        console.log(todo);
        //await updateDoc(stdDoc,{"ownTask.todo":arrayUnion(todo)});
        setOpenTodoForm(false);
    }

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClickOpen = () => {
        setOpenTodoForm(true);
    };

    const handleClose = () => {
        setOpenTodoForm(false);
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardHeader
                            title={<Typography varient="h6">Todo</Typography>}
                        />
                        <CardContent>

                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" onClick={handleClickOpen} startIcon={<AddSharp />}>
                                Add Todo
                            </Button>
                            <Dialog open={openTodoForm} onClose={handleClose}>
                                <form id='add-todo-form' onSubmit={(e)=>todoFormSubmit(e)}>
                                <DialogTitle>Add Todo Form</DialogTitle>
                                <DialogContent>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="title"
                                            label="Title"
                                            name="title"
                                            required
                                            fullWidth
                                        />
                                        <TextField
                                            id="standard-multiline-static"
                                            label="Description"
                                            multiline
                                            fullWidth
                                            name="des"
                                            rows={4}
                                            required
                                        />
                                        <Button
                                            variant="contained"
                                            component="label"
                                            startIcon={<AddSharp />}
                                        >
                                            Upload File
                                            <input
                                                type="file"
                                                hidden
                                            />
                                        </Button>
                                        <FormControl sx={{ mt: 1, mb: 1 }} fullWidth>
                                            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={age}
                                                name="priority"
                                                label="Age"
                                                onChange={handleChange}
                                                required
                                            >
                                                <MenuItem value='High'>High</MenuItem>
                                                <MenuItem value='Medium'>Medium</MenuItem>
                                                <MenuItem value='Low'>Low</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DateTimePicker
                                                label="Due Date& Time"
                                                value={dueDate}
                                                onChange={handleDueDateChange}
                                                renderInput={(params) => <TextField fullWidth {...params} />}
                                                required
                                            />
                                        </LocalizationProvider>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox name="allowText" value={allowText} onChange={(event)=>setallowText(event.target.checked)}/>} label="Allow Text Input" />
                                            <FormControlLabel control={<Checkbox name="allowAttachment" value={allowAttachment} onChange={(event)=>setallowAttachment(event.target.checked)}/>} label="Allow Attachments" />
                                        </FormGroup>
                                    
                                </DialogContent>
                                <DialogActions>
                                    <Button type="submit">Submit</Button>
                                    <Button onClick={handleClose}>Cancle</Button>
                                </DialogActions>
                                </form>
                            </Dialog>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
