import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-corte-cia.vercel.app/v1/api',
});

export default api;
