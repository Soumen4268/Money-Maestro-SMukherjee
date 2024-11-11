// apiConfig.js

import axios from 'axios';

// Set up the base URL for all Axios requests
const apiClient = axios.create({
  baseURL: 'https://baseapi-url.com/api', // replace with your actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
