import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import useAxios from "../hooks/useAxios";
import axiosInstance from "../axios";

import Loader from "../common/Loader/index";
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);

    // let [username, setUsername] = useState(localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens').access) : null);
    let [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const loginUser = async (e) => {
      try{
        e.preventDefault();
        const res = await axiosInstance.post(`token/`,
        {
          email:e.target.email.value,
          password:e.target.password.value
          }
        );
        if (res.status === 200){
          let data = await res.data;
          setAuthTokens(()=>data);
          // const decoded = jwt_decode(data.access).username;
          // setUsername(()=>decoded);
          localStorage.setItem('authTokens', JSON.stringify(data));
          navigate('/');
        } else {
          console.error("It shouldn't get here");
        }
      } catch (e){
        console.error("Error with login: ", e)
      }
    };

    const signupUser = async (formData) => {
      try{
        const res = await axiosInstance.post(`user/create/`, {
          email:formData.email,
          user_name:formData.username,
          password:formData.password
          }
        );
        if (res.status === 200){
          // let data = await res.data;
          // setAuthTokens(()=>data);
          // localStorage.setItem('authTokens', JSON.stringify(data));
          navigate('/auth/signin/');
        } else {
          console.error("It shouldn't get here");
        }
      } catch (e){
        console.error("Error with login: ", e)
      }
    };
    
    let logoutUser = () => {
        setAuthTokens(null);
        // setUsername(null);
        localStorage.removeItem('authTokens');
        navigate('/pages/landingpage');
    }

    let contextData = {
        authTokens:authTokens,
        setAuthTokens:setAuthTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
        signupUser:signupUser,
    }

    useEffect(() => {
        if(authTokens){
            //console.log("Auth tokens: ", authTokens);
            // console.log("Access Token: ",JSON.parse(authTokens).access);
            // const decoded = jwt_decode(authTokens.access).username;
            // console.log("username: ",decoded);
            // setUsername(decoded);
        } else {
          logoutUser();
          }
        setLoading(false);
    }, [authTokens, loading]);

    return (
      <AuthContext.Provider value={contextData} >
        { loading ? <Loader/> : children }
      </AuthContext.Provider>
    );
};

export default AuthProvider;
