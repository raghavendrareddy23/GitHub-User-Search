import axios from 'axios';

const baseURL = 'https://api.github.com';

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
});

export default api;
