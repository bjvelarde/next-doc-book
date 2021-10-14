import axios from 'axios';
import getConfig from 'next/config';

const {
  publicRuntimeConfig: { API_BASE_URL, API_KEY }
} = getConfig();

const http = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'x-api-key': API_KEY!,
    'Content-Type': 'application/json'
  }
});

export default http;