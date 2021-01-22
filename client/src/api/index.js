import axios from 'axios';

const url = 'http://localhost:4000/';

export const fetchBookings = () => axios.get(url);
export const createBooking = (newBooking) => axios.post(url, newBooking);
export const updateBooking = (id, updatedBooking) => axios.patch(`${url}/${id}`, updatedBooking);
export const deleteBooking = (id) => axios.delete(`${url}/${id}`);