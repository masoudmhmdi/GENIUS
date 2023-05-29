import axios from 'axios';

const baseURL = 'http://localhost:8000/api';

export const serverReq = axios.create({
  baseURL,
});
