import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import useAxios from "../hooks/useAxios";
import Loader from "../common/Loader/index";

import AuthContext from './AuthContext';
import TaskContext from './TaskContext';

const TaskProvider = ({ children }) => {
    let { authTokens } = useContext(AuthContext);
    let [userTasks, setUserTasks] = useState({});

    const axiosInstance = useAxios();

    const getUserTasks = async () => {
      try{
        const response = await axiosInstance.get();
        if (response.status == 200){
          let data = await response.data;
          setUserTasks(data);
        } else {
          console.error("Error getting Tasks");
        }
      } catch (e) {
        console.log(e);
      }
    }

    // fields for creae
    // 'status',
    // 'task',
    // 'description',
    // 'deadline'
    // 'priority',
    // 'category',
    // 'notifications',

    // const createUserTask = async (e) => {
    //     const response = await axiosInstance.post("create/",{
    //       status:e.target.status.value,
    //       status:e.target.task.value,
    //       status:e.target.description.value,
    //       status:e.target.deadline.value,
    //       status:e.target.priority.value,
    //       status:e.target.category.value,
    //       status:e.target.notification.value,
    //       })
    //     if (response.status == 200){
    //       let data = await response.data;
    //       setUserTasks(data);
    //     } else {
    //       console.error("Error getting Tasks");
    //     }
    //   }
    //
    let contextData = {
        userTasks:userTasks,
        setUserTasks:setUserTasks,
        getUserTasks:getUserTasks,
    }

    useEffect(() => {
        if(authTokens){
          getUserTasks();
        } 
    }, [authTokens]);

    return (
      <TaskContext.Provider value={contextData} >
        { children }
      </TaskContext.Provider>
    );
};

export default TaskProvider;
