import axios from 'axios';

export const API_BASE = axios.create({
  baseURL: 'http://5e8a0748b4252f0016a623a9.mockapi.io',
  timeout: 5000,
  headers: { 'content-type': 'application/json' },
});
