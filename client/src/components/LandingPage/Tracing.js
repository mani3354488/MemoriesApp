import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Title from './Title'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Tracing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Title>TrackBooking</Title>
            <TextField
            id="outlined-helperText"
            label="BookingID"
            defaultValue=""
            helperText="Enter Unique booking id"
            variant="outlined"
            fullWidth
            />
            <Button color="primary" variant="contained">Submit</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}