
/* ***********************************************************
* File: useAxios.tsx
*
* Logic: Defines a hook for creating an Axios instance with authentication
* headers and handling token refresh.
*
* Type: React Hook
************************************************************/


import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs'


const baseURL = 'http://127.0.0.1:8000/api/'

const useAxios = () => {
    const {authTokens, setAuthTokens} = useContext(AuthContext)

    const axiosInstance: AxiosInstance = axios.create({
      baseURL, 
      timeout: 5000,
      headers: {
        'Authorization': `Bearer ${authTokens.access}`,
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    });

    axiosInstance.interceptors.response.use(async res => {
        return res;
    });

    axiosInstance.interceptors.request.use(async req => {
        const user = jwt_decode(authTokens.access)
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    
        if(!isExpired) return req
    
        const response = await axios.post(`${baseURL}token/refresh/`, {
            refresh: authTokens.refresh
          });
    
        localStorage.setItem('authTokens', JSON.stringify(response.data))
        setAuthTokens(response.data)
        
        req.headers.Authorization = `Bearer ${response.data.access}`
        return req
    })
    
    return axiosInstance;
}

export default useAxios;
