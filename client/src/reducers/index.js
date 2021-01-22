import { combineReducers } from 'redux';

import bookings from './bookings'
import { tasksReducer } from "./tasksReducer";

export default combineReducers({ bookings, tasks: tasksReducer });