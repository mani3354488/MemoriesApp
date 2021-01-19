import { combineReducers } from 'redux';

import bookings from './bookings'
import auth from './auth'

export default combineReducers({ bookings, auth });