
/*************************************************************************
 * WORK-IN-PROGRESS: 
 *    Change way tasks are updated
 *
 * File: TaskProvider.tsx
 *
 * Logic: Defines a React context provider for managing task-related data and functions.
 *
 * Type: React Context Provider
*************************************************************************/


import { useState, useEffect, useContext, useRef } from 'react'
import useAxios from "../hooks/useAxios";

import TaskContext from './TaskContext';

const TaskProvider = ({ children }) => {

    let [userTasks, setUserTasks] = useState({});

    let [userTasksStats, setUserTasksStats] = useState({
        level:0,
        todo:0,
        inProgress:0,
        completed:0,
        overdue:0,
      });

    const axiosInstance = useAxios(); 

    /* *****************************************
     *  GET USER TASKS (QUERY)
     * *****************************************/
    const getUserTasks = async () => {
      try{
        const response = await axiosInstance.get();
        setUserTasks(response.data);
        setUserTasksStats({
            level:0,
            todo:0,
            inProgress:0,
            completed:0,
            overdue:0,
          });
      } catch (e) {
        console.error("Error Fetching: ",e);
      }
    }

    /* *****************************************
     *  GET TASK STATS (LOCAL)
     * *****************************************/
  const getTasksStats = () => {
    if (Object.keys(userTasks).length > 0){
      const updatedStats = {
          level:0,
          todo:0,
          inProgress:0,
          completed:0,
          overdue:0,
        }
      userTasks.forEach((task)=>{
          if (task.status == "ToDo") {
            updatedStats.todo++;
          } else if (task.status == "In-Progress"){
            updatedStats.inProgress++
          } else if (task.status == "Complete") {
            updatedStats.completed++;
          } else if (task.status == "Overdue") {
            updatedStats.overdue++;
          } else {
          console.error("UserTasksStats Error")
          }
          setUserTasksStats(updatedStats);
          }
        )
      }
    }

    /* *****************************************
     *  CREATE TASK (QUERY)
     * *****************************************/
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
        // setUserTasks([...userTasks, res.data]);
        // setUpdatedUserTasks(!updateUserTask);
      } catch (e) {
        console.error("Creating Error: ",e);
      }
    }
    
    /* *****************************************
     *  UPDATE TASK (QUERY)
     * *****************************************/
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
        getUserTasks();
        // const updated_task_id = res.data.task_id;
        // const updatedTasks = (prevTasks) => {prevTasks.map((task)=>task.task_id == updated_task_id ? res.data : task)}
        // setUserTasks(updatedTasks);
        // setUpdatedUserTasks(!updateUserTask);
      } catch (e) {
        console.error("Error Updating: ", e);
      }
    }

    /* *****************************************
     *  DELETE TASK (QUERY)
     * *****************************************/
    const deleteUserTask = async (task_id) => {
      try {
        const res = await axiosInstance.delete(`delete/${task_id}`);
        // const updatedTasks = userTasks.filter((x)=>x.task_id != task_id);

        getUserTasks();
        // const updated_task_id = res.data.task_id;
        // const updatedTasks = (prevTasks) => {prevTasks.filter((task)=>task.task_id == updated_task_id)}
        // setUserTasks(updatedTasks);
        // setUpdatedUserTasks(!updateUserTask);
      } catch (e) {
        console.error("Error Deleting: ", e);
      }
    }

    let contextData = {
        userTasks:userTasks,
        setUserTasks:setUserTasks,
        // updatedUserTasks:updatedUserTasks,

        getUserTasks:getUserTasks,
        createUserTask:createUserTask,
        deleteUserTask:deleteUserTask,
        updateUserTask:updateUserTask,

        // updatedStats:updatedStats,
        userTasksStats:userTasksStats,
    }

    useEffect(() => {
      getUserTasks();
      // setUpdatedStats(!updatedStats);
    },[]); // Runs once on mount 

    useEffect(() => {
      getTasksStats();
    }, [userTasks]); // Runs on mount and UpdatedUserTasks

    return (
      <TaskContext.Provider value={contextData} >
        { children }
      </TaskContext.Provider>
    );
};

export default TaskProvider;
