import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardHeader, Grid, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const useStyles = makeStyles((theme) => ({

    News: {
        width: '500px',
    },

}));

export default function News() {
    const classes = useStyles();

    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Grid item>
                    <CardHeader className={classes.News}
                        action={<IconButton aria-label="settings">
                            <MoreHorizIcon />
                            </IconButton>}
                        title={<Typography varient="h6">News</Typography>}
                    sx={{ pb: 0 }}
                    />
                
            </Grid>

            <Box sx={{ width: '100%', mt: 0 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="New News" sx={{ pt: 0, pb: 0 }} {...a11yProps(0)} />
                        <Tab label="All News" sx={{ pt: 0, pb: 0 }} {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                   Newsss
                </TabPanel>
                <TabPanel value={value} index={1}>
                    News
                </TabPanel>
            </Box>


        </div>
    )
}
