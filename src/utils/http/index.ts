import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  timeout: 5000,
});
