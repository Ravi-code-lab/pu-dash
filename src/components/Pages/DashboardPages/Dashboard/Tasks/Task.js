import {React,useState} from 'react'
import { Grid, Card, CardContent, Typography, CardHeader, IconButton, Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export default function Task() {
    const [value, setValue] = useState('1');
    const [todoData, settodoData] = useState([]);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    
    return (
        <>
            <Card>
                <CardHeader
                    action={<IconButton aria-label="settings">
                        <MoreHorizIcon />
                    </IconButton>}
                    title={<Typography varient="h6">Task</Typography>}
                    sx={{ pb: 0 }}
                />
                <CardContent sx={{ p: 0 }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="Tasks" sx={{ mt: 0 }}>
                                <Tab label={<Typography varient="subheading">Task</Typography>} sx={{ pt: 0, pb: 0 }} value="1" />
                                <Tab label="Completed" sx={{ pt: 0, pb: 0 }} value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">Item One</TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                    </TabContext>

                </CardContent>
            </Card>
        </>
    )
}
