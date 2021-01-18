import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteBooking } from '../../../actions/bookings';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const Booking = ({ booking, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useRowStyles();
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {booking._id}
        </TableCell>
        <TableCell align="right">{booking.modeOfTransport}</TableCell>
        <TableCell align="right">{booking.commodity}</TableCell>
        <TableCell align="right">{booking.valueOfCommodity}</TableCell>
        <TableCell align="right">{booking.weight}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                  <TableCell>Consignee</TableCell>
                    <TableCell align="right">PlaceOfOrgin</TableCell>
                    <TableCell align="right">Destination</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {booking.shipperConsignee}
                      </TableCell>
                      <TableCell align="right">{booking.placeOfOrgin}</TableCell>
                      <TableCell align="right">{booking.destination}</TableCell>
                      <TableCell align="right">{booking.status}</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
    );
};

export default Booking;