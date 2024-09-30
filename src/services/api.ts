import axios from 'axios';

const { VITE_APP_BASE_URL_API, VITE_APP_TOKEN } = import.meta.env;

export const api = axios.create({
  baseURL: VITE_APP_BASE_URL_API,
});

// Alter defaults after instance has been created
api.defaults.headers.common['Authorization'] = `Bearer ${VITE_APP_TOKEN}`;
