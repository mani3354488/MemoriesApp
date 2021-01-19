import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

//action creators are functions that return an action

export const getBookings = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBookings();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message)
    }

}

export const createBooking = (booking) => async (dispatch) => {
    try {
        const { data } = await api.createBooking(booking);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateBooking = (id, booking) => async (dispatch) => {
    try {
        const { data } = await api.updateBooking(id, booking);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteBooking = (id) => async (dispatch) => {
    try {
        await api.deleteBooking(id);
        dispatch( {type: DELETE, payload: id } );
    } catch (error) {
        console.log(error);
    }
}

