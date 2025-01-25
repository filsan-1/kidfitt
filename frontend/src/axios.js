// src/axios.js
import axios from 'axios';

// You can set the base URL of your Django API
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/', // Adjust to your Django API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: You can add an interceptor to handle authorization tokens if needed
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Assuming you're storing the token in localStorage
    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
