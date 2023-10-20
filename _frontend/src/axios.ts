import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

//TS axios : https://bobbyhadz.com/blog/typescript-http-request-axios

let baseURL = 'http://localhost:8000/api/'; // Development environment URL

if (process.env.NODE_ENV === 'prod') {
  baseURL =  'https://red-lobster.dev/api/'; // Production environment URL
}

// Define your Axios instance with a custom interceptor
const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseURL, // Replace with your base URL
  timeout: 5000,
  headers: {
    'Authorization': localStorage.getItem('access_token')
      ? 'JWT ' + localStorage.getItem('access_token')
      : null,
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async function (error: AxiosError) {
    const originalRequest = error.config;

    if (typeof error.response === 'undefined') {
      alert(
        'A server/network error occurred. ' +
          'Looks like CORS might be the problem. ' +
          'Sorry about this - we will get it fixed shortly.'
      );
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      originalRequest?.url ===
        axiosInstance.defaults.baseURL + 'token/refresh/'
    ) {
      window.location.href = '/auth/signin';
      return Promise.reject(error);
    }

    if (
      error.response.data.code === 'token_not_valid' &&
      error.response.status === 401 &&
      error.response.statusText === 'Unauthorized'
    ) {
      const refreshToken = localStorage.getItem('refresh_token');

      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);

        if (tokenParts.exp > now) {
          try {
            const response = await axiosInstance.post('/token/refresh/', {
              refresh: refreshToken,
            });

            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);

            axiosInstance.defaults.headers['Authorization'] =
              'JWT ' + response.data.access;
            originalRequest.headers['Authorization'] =
              'JWT ' + response.data.access;

            return axiosInstance(originalRequest);
          } catch (err) {
            console.log(err);
          }
        } else {
          console.log('Refresh token is expired', tokenParts.exp, now);
          window.location.href = '/auth/signin/';
        }
      } else {
        console.log('Refresh token not available.');
        window.location.href = '/auth/signin/';
      }
    }

    // Specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export default axiosInstance;
