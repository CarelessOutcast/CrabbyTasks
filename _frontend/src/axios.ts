/*************************************************************************
 * File: axios.ts
 *
 * Logic: This file sets up an Axios instance with custom configurations for
 * making HTTP requests to a specified API URL based on the environment.
 *
 * Type: Utility
*************************************************************************/

import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

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
