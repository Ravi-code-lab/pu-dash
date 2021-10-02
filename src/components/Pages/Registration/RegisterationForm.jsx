import { doc, getDoc} from '@firebase/firestore';
import { React, useState } from 'react'
import { db, auth, insertFirebaseDocument } from '../../../services/firebase'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Avatar, Grid, TextField, Typography, Box, Autocomplete, Button } from '@mui/material'
import { AvatarIcon} from '../../Import'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';


//This Function is for checking the registeration
export const CheckRegistration = async (user) => {
    let register = 'std';
    let docId = user.email.split('@');
    docId.pop();
    docId = docId.join();
    if (isNaN(docId.substring(0, 4))) {
        register = 'tch'
    }

    if (register === 'tch') {
        const ref = doc(db, "staff", docId);
        await getDoc(ref).then((docSnap) => { if (docSnap.exists()) { register = 'staff' } else { register = 'staff' } }).catch((error) => alert(error))

    } else {
        const ref = doc(db, "students", docId);
        await getDoc(ref).then((docSnap) => { if (docSnap.exists()) { register = 'std' } else { register = 'stdn' } }).catch((error) => alert(error))
    }
    console.log(register);
    return register;
}

function getCoursesAndSpecilization(email){
    let course;
    let specilizition;
    let dep;

    //checking for course from email
    if(email.indexof('bca')!==-1){
        course='bca';
        dep='sce'
        specilizition='gen'
        if(email.indexof('bcaai')!==-1){
            specilizition='ai'
        }else if(email.indexof('bcamais')!==-1){
            specilizition='mais'
        }else if(email.indexof('bcads')!==-1){
        }else if(email.indexof('bcacloud'!==-1)){
            
        }
    }
    return [dep,course,specilizition]
}



export default function RegisterationForm({ submitCallback }) {
    const [dobvalue, setDobValue] = useState(null);
    const gender = [{ label: "Male" }, { label: "Female" }, { label: "Other" }];

    //on form submit this will run
    function SubmitForm(e) {
        const form = document.querySelector("#reg-form");
        e.preventDefault();
        let docId = auth.currentUser.email.split('@');
        docId.pop();
        docId = docId.join();
        console.log(docId);
        console.log(form.regno);

        let course = getCoursesAndSpecilization(docId);
        const data= { 
            name: auth.currentUser.displayName,
            regno: form.regno.value.toUpperCase(),
            dob:form.dob.value,
            email: auth.currentUser.email,
            mobile: parseInt(form.personalMobile.value),
            personalEmail: form.personalEmail.value,
            fatherName: form.fatherName.value,
            fatherMobile: form.fatherMobile.value,
            motherName: form.motherName.value,
            motherMobile: form.motherMobile.value==null? parseInt('0'): parseInt(form.motherMobile.value),
            acadmics:{ 
                marks10th: parseInt(form.marks10.value), 
                marks10thunit: form.marks10unit.value,
                marks12th: parseInt(form.marks12.value), 
                marks12thunit: form.marks12unit.value 
            }
        }
        //submiting the form
        insertFirebaseDocument("students", docId, data).then(() => { submitCallback(true) });
    }


    return (
        <div>
            <Container component="main" maxWidth="md" sx={{textAlign:'center'}}>
            <Typography sx={{ padding:'20px'}} variant="h5"  gutterBottom>Registration Form</Typography>
                <Paper sx={{ padding: "20px 20px 20px 20px" }}>
                    <form id="reg-form" method="POST" onSubmit={(e) => SubmitForm(e)}>
                        <Typography variant="h6"  gutterBottom>Personal Details</Typography>
                        <Box style={{ margin: "auto" }}>
                            <Avatar alt="Avatar Icon" sx={{ width: 150, height: 150, margin: "auto" }} src={AvatarIcon} />
                        </Box>
                        <Grid sx={{ mt: 1 }} container spacing={3}>
                            <Grid xs={12} item>
                                <TextField label="Registation no" name="regno" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField sx={{textAlign:'left'}} type="email" label="Personal Email" name="personalEmail" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="tel" label="Personal Mobile" name="personalMobile" fullWidth required />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="DOB"
                                        value={dobvalue}
                                        onChange={(newValue) => {
                                            setDobValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} name="dob" fullWidth required />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <Autocomplete
                                    disablePortal
                                    options={gender}
                                    renderInput={(params) => <TextField {...params} name="gender" label="Gender" required />}
                                />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Father Name" name="fatherName"fullWidth required />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                                    label="Father Phone Number"
                                    fullWidth
                                    name="fatherMobile"
                                    required />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Mother Name" name="motherName" fullWidth required/>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Mother Phone Number" name="motherMobile" type="number" fullWidth />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField label="Address" name="address" fullWidth />
                            </Grid>
                        </Grid>
                        <Typography sx={{mt:2}} variant="h6" gutterBottom>Acadmic Details</Typography>
                        <Grid sx={{ mt: 1 }} container spacing={3}>
                            {/* 10ths Marks */}
                        <Grid xs={12} sm={3} item>
                                <TextField label="10th Marks" name="marks10" type="number" fullWidth required />
                        </Grid>
                        {/* 10th Marks Unit */}
                        <Grid item xs={12} sm={3}>
                        <Autocomplete

                                    disablePortal
                                    options={['%','CGPA']}
                                    renderInput={(params) => <TextField {...params} name="marks10unit" label="Unit" required />}
                                />
                        </Grid>
                        {/* 12th Marks Unit */}
                        <Grid xs={12} sm={3} item>
                                <TextField label="12th Marks" type="number" name="marks12" fullWidth required />
                        </Grid>
                        {}
                        <Grid item xs={12} sm={3}>
                        <Autocomplete
                                    disablePortal
                                    options={['%','CGPA']}
                                    renderInput={(params) => <TextField {...params} name="marks12unit" label="Unit" required />}
                                />
                        </Grid>
                        </Grid>
                        <Button type="submit" variant="contained" sx={{mt:5}}> Register</Button>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}
