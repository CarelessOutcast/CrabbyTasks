import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import jwt_decode from "jwt-decode";

let baseURL = 'http://localhost:8000/api/'; // Development environment URL
if (process.env.NODE_ENV === 'prod') {
  baseURL =  'https://red-lobster.dev/api/'; // Production environment URL
}

// Define your Axios instance with a custom interceptor
const axiosInstance: AxiosInstance = axios.create({
  baseURL, 
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});


export default axiosInstance;
