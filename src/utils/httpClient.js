import axios from 'axios';

const authClient = axios.create({
  baseURL: 'https://micro-api-one.terraterri.com/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('adminToken')}` || null
  }
});

const masterClient = axios.create({
  baseURL: 'https://micro-api-three.terraterri.com/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('adminToken')}`
  }
});

const projectClient = axios.create({
  baseURL: 'https://micro-api-two.terraterri.com/api/project/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('adminToken')}`
  }
});

const expoClient = axios.create({
  baseURL: 'https://mmworkspace.com/expo/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('adminToken')}`
  }
});

export { authClient, masterClient, projectClient, expoClient };
