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
        console.log("Response:", JSON.stringify(res,null,2));
        return res;
    });

    axiosInstance.interceptors.request.use(async req => {
        console.log("Request:", JSON.stringify(req,null,2));
        const user = jwt_decode(authTokens.access)
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    
        if(!isExpired) return req
    
        const response = await axios.post(`${baseURL}token/refresh/`, {
            refresh: authTokens.refresh
          });
    
        localStorage.setItem('authTokens', JSON.stringify(response.data))
        console.log("Axios Intercept: ", response.data)
        setAuthTokens(response.data)
        // setUser(jwt_decode(response.data.access))
        
        req.headers.Authorization = `Bearer ${response.data.access}`
        return req
    })
    
    return axiosInstance;
}

export default useAxios;
