import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  timeout: 5000,
});
