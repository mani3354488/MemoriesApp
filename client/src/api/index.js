import axios from 'axios'; //we use axios to make api call 

const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url);


