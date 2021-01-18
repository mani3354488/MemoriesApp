import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, CardHeader, Divider, Grid, TextField, Button, Typography, Paper, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createBooking, updateBooking } from '../../actions/bookings';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      minHeight: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3),
    },
    textField: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    title: {
      display: 'flex',
      paddingTop: 10,
      paddingLeft: 24,
    }
}));

const Form = ({ currentId, setCurrentId }) => {
  const [bookingData, setBookingData] = useState({ shipperConsignee: '', modeOfTransport: '', commodity: '', 
    valueOfCommodity: '', weight: '', placeOfOrgin: '', destination: '' });
  const booking = useSelector((state) => (currentId ? state.bookings.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (booking) setBookingData(booking);
  }, [booking]);

  const clear = () => {
    setCurrentId(0);
    setBookingData({ shipperConsignee: '', modeOfTransport: '', commodity: '', 
    valueOfCommodity: '', weight: '', placeOfOrgin: '', destination: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
        dispatch(updateBooking(currentId, bookingData));
        clear();
    } else {
        dispatch(createBooking(bookingData));
        clear();
    }
  };

  

  return (
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Card>
        <Typography className={classes.title} component="h2" variant="h6" color="primary" gutterBottom>
        BookingForm
        </Typography>
          <CardContent>
              <Grid item md={12} xs={12}>
                  <TextField name="shipperConsignee" className={classes.textField} fullWidth variant="outlined" label="shipperConsignee" value={bookingData.shipperConsignee} onChange={(e) => setBookingData({ ...bookingData, shipperConsignee: e.target.value })} />
              </Grid>
              <Grid item md={6} xs={12}>
                  <TextField name="modeOfTransport" className={classes.textField} fullWidth variant="outlined" label="modeOfTransport" value={bookingData.modeOfTransport} onChange={(e) => setBookingData({ ...bookingData, modeOfTransport: e.target.value })} />
              </Grid>
              <Grid item md={6} xs={12}>
                  <TextField name="commodity" className={classes.textField} fullWidth variant="outlined" label="commodity" value={bookingData.commodity} onChange={(e) => setBookingData({ ...bookingData, commodity: e.target.value })} />
              </Grid>
              <Grid item md={6} xs={12}>
                  <TextField name="valueOfCommodity" className={classes.textField} fullWidth variant="outlined" label="valueOfCommodity" value={bookingData.valueOfCommodity} onChange={(e) => setBookingData({ ...bookingData, valueOfCommodity: e.target.value })} />
              </Grid>
              <Grid item md={6} xs={12}>
                  <TextField name="weight" className={classes.textField} fullWidth variant="outlined" label="weight" value={bookingData.weight} onChange={(e) => setBookingData({ ...bookingData, weight: e.target.value })} />
              </Grid>
              <Grid item md={12} xs={12}>
                  <TextField name="placeOfOrgin" className={classes.textField} fullWidth variant="outlined" label="placeOfOrgin" value={bookingData.placeOfOrgin} onChange={(e) => setBookingData({ ...bookingData, placeOfOrgin: e.target.value })} />
              </Grid>
              <Grid item md={12} xs={12}>
                  <TextField name="destination" className={classes.textField} fullWidth variant="outlined" label="destination" value={bookingData.destination} onChange={(e) => setBookingData({ ...bookingData, destination: e.target.value })} />
              </Grid>
          </CardContent>
          <Box display="flex" justifyContent="flex-end" p={2}>
              <Button color="primary" type="submit" variant="contained">Create Booking</Button>
          </Box>
        </Card>
      </form>
  );
};

export default Form;