//icons
import { AddSharp, Undo } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckIcon from '@mui/icons-material/Check';
//import { AvatarIcon } from '../../../../Import';

//lab
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { TabContext, TabList, TabPanel } from '@mui/lab';

// components
import { React, useState, useEffect } from 'react';
import { Box, Button, CardActions, CardContent, CardHeader, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormGroup, IconButton, InputLabel, List, Divider, ListItem, ListItemText, MenuItem, Select, Tab, TextField, Typography } from '@mui/material';

// firebse
import { arrayUnion, arrayRemove, doc, Timestamp, updateDoc, getDoc } from '@firebase/firestore';
import { auth, db } from '../../../../../services/firebase';
import { userData } from '../../../Registration/RegisterationForm';

export default function Task() {
    const [tabValue, setTabValue] = useState('1');
    const [openTodoForm, setOpenTodoForm] = useState(false);
    const [dueDate, setDueDate] = useState(null);
    const [allowText, setallowText] = useState(false);
    const [allowAttachment, setallowAttachment] = useState(false);
    const [todo, setTodo] = useState(userData.ownTask.todo);
    const [age, setAge] = useState('');
    const [secondTodo, setSecondTodo] = useState(userData.ownTask.todo);
    const [completedTodo, setCompletedTodo] =  useState(userData.ownTask.complete);
    const handleDueDateChange = (newValue) => {
        setDueDate(newValue);
    };

    const todoFormSubmit = async (e) => {
        e.preventDefault();
        const form = document.querySelector("#add-todo-form");
        let docId = auth.currentUser.email.split('@');
        docId.pop();
        docId = docId.join();
        const stdDoc = doc(db, 'students', docId);
        const date = new Date();
        const todoData = {
            taskid: Timestamp.fromDate(date),
            task: form.title.value,
            des: form.des.value,
            createdBy: 'you',
            attachment: ['test_txt.txt'],
            dueDate: Timestamp.fromDate(dueDate),
            submitted: false,
            submitDate: Timestamp.fromDate(date),
            priority: form.priority.value,
            allowAttachment: allowAttachment,
            allowText: allowText
        }
        await updateDoc(stdDoc, { "ownTask.todo": arrayUnion(todoData) });
        setOpenTodoForm(false);
        setSecondTodo([...todo, todoData]);
    }

    /*const completedTodo = async (index) => {
        let todoData = todo[index];
        let tempTodo = todo;
        let docId = auth.currentUser.email.split('@');
        docId.pop();
        docId = docId.join();
        const stdDoc = doc(db, 'students', docId);
        await updateDoc(stdDoc, { "ownTask.todo": arrayRemove(todoData) });
        todoData.submitted = true;
        todoData.submitDate = Timestamp.fromDate(new Date())
        await updateDoc(stdDoc, { "ownTask.todo": arrayUnion(todoData) })
        tempTodo.splice(index, 1);
        console.log(tempTodo);
        setSecondTodo(tempTodo);
    }*/

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClickOpen = () => {
        setOpenTodoForm(true);
    };

    const handleClose = () => {
        setOpenTodoForm(false);
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleTodoRemove = async (index) => {
        let todoData = todo[index];
        let tempTodo = todo;
        let docId = auth.currentUser.email.split('@');
        docId.pop();
        docId = docId.join();
        const stdDoc = doc(db, 'students', docId);
        await updateDoc(stdDoc, { "ownTask.todo": arrayRemove(todoData) });
        tempTodo.splice(index, 1);
        console.log(tempTodo);
        setSecondTodo(tempTodo);
    }


    useEffect(() => {
        const fetchTodo = async () => {
            let docId = auth.currentUser.email.split('@');
            docId.pop();
            docId = docId.join();
            const stdDoc = doc(db, 'students', docId);
            await getDoc(stdDoc).then(result => { console.log(result.data()); setTodo(result.data().ownTask.todo) });
        }
        fetchTodo();
    }, [secondTodo])

    return (
        <>
            <CardHeader
                action={<IconButton aria-label="settings">
                    <MoreHorizIcon />
                </IconButton>}
                title={<Typography varient="h6">Task</Typography>}
                sx={{ pb: 0 }}
            />
            <CardContent sx={{ p: 0 }}>
                <TabContext value={tabValue}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleTabChange} aria-label="Tasks" sx={{ mt: 0 }}>
                            <Tab label={<Typography varient="subheading">Task</Typography>} sx={{ pt: 0, pb: 0 }} value="1" />
                            <Tab label="Completed" sx={{ pt: 0, pb: 0 }} value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <List>
                            {todo.map((tododata, index) => {

                                return (
                                    <Box key={index}>
                                        <ListItem key={index} secondaryAction={
                                            <IconButton color="primary" onClick={todo.length !== 0 ? () => handleTodoRemove(index) : () => { }}>
                                                <DeleteIcon />
                                            </IconButton>
                                        } alignItems="flex-start">
                                            <ListItemText
                                                primary={tododata.task}
                                                secondary={tododata.des}
                                            />
                                        </ListItem>
                                        <Divider />
                                    </Box>)
                            })}
                        </List>
                        {/* For the Adding new todo */}
                        <Dialog open={openTodoForm} onClose={handleClose}>
                            <form id='add-todo-form' onSubmit={(e) => todoFormSubmit(e)}>
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
                                        type="file"
                                        startIcon={<AddSharp />}
                                    >
                                        Upload File
                                        {/* <input // type="file"
                                                // hidden
                                            // />*/}

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
                                        <FormControlLabel control={<Checkbox name="allowText" value={allowText} onChange={(event) => setallowText(event.target.checked)} />} label="Allow Text Input" />
                                        <FormControlLabel control={<Checkbox name="allowAttachment" value={allowAttachment} onChange={(event) => setallowAttachment(event.target.checked)} />} label="Allow Attachments" />
                                    </FormGroup>

                                </DialogContent>
                                <DialogActions>
                                    <Button type="submit">Submit</Button>
                                    <Button onClick={handleClose}>Cancle</Button>
                                </DialogActions>
                            </form>
                        </Dialog>
                    </TabPanel>
                    {/*This is the complete tab */}
                    <TabPanel value="2">
                        <List>
                            {completedTodo.map((completedData, index) => {
                                return (
                                    <Box key={index}>
                                        <ListItem key={index} secondaryAction={
                                            <IconButton color="primary" onClick={completedData.length !== 0 ? () => handleTodoRemove(index) : () => { }}>
                                                <Undo/>
                                            </IconButton>
                                        } alignItems="flex-start">
                                            <ListItemText
                                                primary={tododata.task}
                                                secondary={tododata.des}
                                            />
                                        </ListItem>
                                        <Divider />
                                    </Box>)
                            })}
                        </List>
                    </TabPanel>
                </TabContext>
            </CardContent>
            <CardActions>
                {tabValue === '1' ? <Button variant="outlined" fullWidth onClick={handleClickOpen} startIcon={<AddSharp />}>
                    Add Todo
                </Button> : <></>
                }
            </CardActions>
        </>
    )
}
