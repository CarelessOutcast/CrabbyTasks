import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import useAxios from "../hooks/useAxios";
import axiosInstance from "../axios";

import Loader from "../common/Loader/index";
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);

    // TODO user profile 
    // let [userProfile, setUserProfile] = useState({});

    let [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    
    const getUserProfile = async (e) => {
      const authenticated_axios = useAxios();
      const res = await authenticated_axios.get('user/gather/');
      const userProfileObj = res.data;
      console.log(userProfileObj);
      // setUserProfile(userProfileObj);
      }


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
          localStorage.setItem('authTokens', JSON.stringify(data));
          getUserProfile();
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
        localStorage.removeItem('authTokens');
        navigate('/pages/landingpage');
    }

    let contextData = {
        // userProfile:userProfile, // TODO add user profile
        authTokens:authTokens,
        setAuthTokens:setAuthTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
        signupUser:signupUser,
    }

    useEffect(() => {
        // getUserProfile(); // TODO USER PROFILE
        setLoading(false);
    }, [authTokens, loading]);


    return (
      <AuthContext.Provider value={contextData} >
        { loading ? <Loader/> : children }
      </AuthContext.Provider>
    );
};

export default AuthProvider;
