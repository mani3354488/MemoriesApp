import axios from 'axios'; //we use axios to make api call 

const API = 'http://localhost:5000/api'

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
});

export const fetchBookings = () => axios.get(API);
export const createBooking = (newBooking) => axios.post(API, newBooking);
export const updateBooking = (id, updatedBooking) => axios.patch(`${API}/${id}`, updatedBooking);
export const deleteBooking = (id) => axios.delete(`${API}/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);