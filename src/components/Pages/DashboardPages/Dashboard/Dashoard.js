import React from 'react'
import { Grid, Card, CardContent, Typography, CardHeader, IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Task from './Tasks/Task';



export default function Dashoard() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item>
          <Card>
            <CardHeader
              action={<IconButton aria-label="settings">
                <MoreHorizIcon />
              </IconButton>}
              title={<Typography varient="h6">Attandance</Typography>}
            />
            <CardContent>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Task/>
        </Grid>
        <Grid item>
          <CardHeader
            title={<Typography varient="h6">News</Typography>}
          />
          <Card>
            <CardContent>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
