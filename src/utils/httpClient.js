import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_LOCAL_ENDPOINT


const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('adminToken')}` || null
  }
});

export { apiClient };
