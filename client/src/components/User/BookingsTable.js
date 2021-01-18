import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Booking from './Bookings.js';
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    paddingTop: 10,
    paddingLeft: 24,
  }
}));

const BookingTable = ({ setCurrentId }) => {
    const classes = useStyles();
    const bookings = useSelector((state) => state.bookings)
    return (
      <TableContainer component={Paper}>
      <Typography className={classes.title} component="h2" variant="h6" color="primary" gutterBottom>
        CreatedBookings
      </Typography>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>BookingId</TableCell>
              <TableCell align="right">ModeofTransport</TableCell>
              <TableCell align="right">Commodity</TableCell>
              <TableCell align="right">ShipmentValue</TableCell>
              <TableCell align="right">Weight</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <Booking key={booking._id} booking={booking} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default BookingTable;
