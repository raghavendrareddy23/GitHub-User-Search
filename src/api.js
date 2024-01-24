// api.js
import axios from 'axios';
const accessToken = 'YOUR_PERSONAL_ACCESS_TOKEN';
const baseURL = 'https://api.github.com';

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${accessToken}`, // Replace with your access token
  },
});


export default api;
