import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardHeader, Divider, IconButton, List ,ListItem, ListItemText} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { getDocs, query, collection, where, orderBy } from '@firebase/firestore';
import { db } from '../../../../../services/firebase';
import { userData } from '../../../Registration/RegisterationForm';

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


export default function News() {
    const [value, setValue] = useState(0);
    const [latestNews, setLatestNews] = useState([]);
    const [oldNews, setOldNews] = useState([]);
    const [updateNews, setUpdateNews] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        const fetchNews = async () => {
            let data = [];
            let coll = collection(db, 'news');
            await getDocs(query(coll, where('department', 'array-contains', userData.department), orderBy('date'))).then(result => {
                result.forEach((documentData) => {
                    data.push(documentData.data());
                });
                setLatestNews(data);
            });
        }
    }, [updateNews])


    return (
        <>

            <CardHeader
                action={<IconButton aria-label="settings">
                    <MoreHorizIcon />
                </IconButton>}
                title={<Typography varient="h6">News</Typography>}
            />


            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="New News" {...a11yProps(0)} />
                        <Tab label="All News" {...a11yProps(1)} />

                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <List>
                        {latestNews.map((news, index) => {
                            return <ListItem key={index}>
                        {<ListItemText primary={news.heading} secondary={news.description}/>
                           } </ListItem>
                        })
                    }
                    </List>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
            </Box>


        </>
    )
}
