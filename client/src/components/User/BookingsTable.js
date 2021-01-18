import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Booking from './Bookings.js';
import { useSelector } from 'react-redux'

const BookingTable = ({ setCurrentId }) => {
    const bookings = useSelector((state) => state.bookings)
    return (
      <TableContainer component={Paper}>
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
