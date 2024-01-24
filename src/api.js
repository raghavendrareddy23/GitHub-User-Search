// api.js
import axios from 'axios';

const baseURL = 'https://api.github.com';

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `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`, // Replace with your access token
  },
});


export default api;
