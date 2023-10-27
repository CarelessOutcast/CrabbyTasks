import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import useAxios from "../hooks/useAxios";
import Loader from "../common/Loader/index";

import AuthContext from './AuthContext';
import TaskContext from './TaskContext';

export const TaskProvider = ({ children }) => {
    let { authTokens } = useContext(AuthContext);
    let [userTasks, setUserTasks] = useState({});

    const navigate = useNavigate();
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
        console.error(e);
      }
    }

    const createUserTask = async (formData) => {
      const res = await axiosInstance.post("create/",{
        status      : formData.status,
        task        : formData.task,
        description : formData.description,
        priority    : formData.priority,
        notification: formData.notification,
        deadline    : formData.deadline,
        category    : formData.category,
        })
      const data = await res.data;
      if (data == 200) {
        getUserTasks();
      }
    }

    const deleteUserTask = async (task_id) => {
      const res = await axiosInstance.delete(`delete/${task_id}`);
      const data = await res.data;
      if (data == 200) {
        setUserTasks(userTasks.filter((x)=>x.task_id != task_id));
      }
    }

    const updateUserTask = async (formData) => {
      const res = await axiosInstance.patch(`update/${formData.task_id}`,{
          status      : formData.status,
          task        : formData.task,
          description : formData.description,
          priority    : formData.priority,
          notification: formData.notification,
          deadline    : formData.deadline,
          category    : formData.category,
      });
      const data = await res.data;
      if (data == 200) {
         getUserTasks();
      }
    }

    let contextData = {
        userTasks:userTasks,
        setUserTasks:setUserTasks,
        createUserTask:createUserTask,
        deleteUserTask:deleteUserTask,
        updateUserTask:updateUserTask,
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
