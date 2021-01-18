import axios from 'axios'; //we use axios to make api call 

const url = 'http://localhost:5000/api'

export const fetchBookings = () => axios.get(url);
export const createBooking = (newBooking) => axios.booking(url, newBooking);
export const updateBooking = (id, updatedBooking) => axios.patch(`${url}/${id}`, updatedBooking);
export const deleteBooking = (id) => axios.delete(`${url}/${id}`);
