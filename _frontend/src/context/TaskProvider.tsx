import { useState, useEffect, useContext, useRef } from 'react'
import useAxios from "../hooks/useAxios";

import TaskContext from './TaskContext';

const TaskProvider = ({ children }) => {
    let [userTasks, setUserTasks] = useState({});
    const userTasksStats = useRef({
        level:0,
        todo:0,
        inProgress:0,
        completed:0,
        overdue:0,
      });

    const axiosInstance = useAxios();
    const getUserTasks = async () => {
      try{
        const response = await axiosInstance.get();
        setUserTasks(response.data);
        userTasksStats.current = {
            level:0,
            todo:0,
            inProgress:0,
            completed:0,
            overdue:0,
          }
      } catch (e) {
        console.error("Error Fetching: ",e);
      }
    }

    const getTasksStats = () => {
      if (Object.keys(userTasks).length > 0){
        userTasks.forEach((task)=>{
            if (task.status == "ToDo") {
            userTasksStats.current.todo++;
            }
            else if (task.status == "In-Progress"){
            userTasksStats.current.inProgress++
            }
            else if (task.status == "Completed"){
            userTasksStats.current.completed++;
            }
            else if (task.status == "Overdue") {
            userTasksStats.current.overdue++;
            }
            else {
            console.error("UserTasksStats Error")
            }
            })
      }
    }

    const createUserTask = async (formData) => {
      try{
        const res = await axiosInstance.post("create/",{
          status      : formData.status,
          task        : formData.task,
          description : formData.description,
          priority    : formData.priority,
          notification: formData.notification,
          deadline    : formData.deadline,
          category    : formData.category,
          })
        getUserTasks();
        // setUserTasks([...userTasks, res.data])
      } catch (e) {
        console.error("Creating Error: ",e);
      }
    }
    
    const updateUserTask = async (formData) => {
      try {
        const res = await axiosInstance.patch(`update/${formData.task_id}`,{
            status      : formData.status,
            task        : formData.task,
            description : formData.description,
            priority    : formData.priority,
            notification: formData.notification,
            deadline    : formData.deadline,
            category    : formData.category,
          });
        console.log(res.data);
        getUserTasks();
        // const updatedTasks = userTasks.map((task)=>{ task.task_id == formData.task_id ? res.data : task });
        // setUserTasks(updatedTasks);
      } catch (e) {
        console.error("Error Updating: ", e);
      }
    }

    const deleteUserTask = async (task_id) => {
      try {
        const res = await axiosInstance.delete(`delete/${task_id}`);
        const updatedTasks = userTasks.filter((x)=>x.task_id != task_id);
        getUserTasks();
        // setUserTasks(updatedTasks);
      } catch (e) {
        console.error("Error Deleting: ", e);
      }
    }

    let contextData = {
        userTasks:userTasks,
        userTasksStats:userTasksStats,
        setUserTasks:setUserTasks,
        getUserTasks:getUserTasks,
        createUserTask:createUserTask,
        deleteUserTask:deleteUserTask,
        updateUserTask:updateUserTask,
    }

    useEffect(() => {
      getUserTasks();
    }, []);

    useEffect(() => {
      getTasksStats();
    }, [userTasks]);

    return (
      <TaskContext.Provider value={contextData} >
        { children }
      </TaskContext.Provider>
    );
};

export default TaskProvider;
