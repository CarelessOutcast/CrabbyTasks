//This is the 'TableThree.tsx' component but modified for TaskManager Page menu
import { useEffect, useState, useContext } from 'react';
import React, { ComponentType } from 'react';
import Loader from '../common/Loader';

import dayjs from 'dayjs';
import { Task } from '../interfaces/Task';
import TaskContext from '../context/TaskContext';
import TaskProvider from '../context/TaskProvider';
import TaskModal from '../components/TaskModal';
import useTaskContext from '../hooks/useTaskContext';

/*
 * Potencially adding a spinner for waiting? 
 * /
interface LoadingProps {
  isLoading: boolean;
}
const TaskListRowsLoading = <T extends object>(Component: ComponentType<T>) => {
  return function TaskListRowComponent(props: T & LoadingProps) {
    const { isLoading, ...rest } = props;
    if (!isLoading) return <Component {...rest} />;
    return (
      <Loader/>
    );
  };
}
*/



const TaskListRows = (props) =>{
  
  const { userTasks, deleteUserTask, updateUserTask } = useContext(TaskContext);
  const [ taskToEdit, setTaskToEdit ] = useState({});
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  const  handleDelete  = (task_id) =>{
    deleteUserTask(task_id);
  };

  const handleEditTask = (taskObj) =>{ 
    setTaskToEdit(taskObj);
    setIsModalVisible(true);
    };
    const handleModalClose = () =>{ 
      // console.log("Modal is closing ");
      setTaskToEdit({});
      setIsModalVisible(false);
      };

    useEffect(()=>{
      // console.log("rerender");
      },[userTasks])

      {isModalVisible && <TaskModal taskData={taskToEdit} onClose={handleModalClose}/>};
  
      
  // If no tasks -> display msg & give ability to Add one
  if (!userTasks || userTasks.length == 0) { 
    return (
      <tr>
        <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
          <h5 className="font-medium text-black dark:text-white">
            No Tasks Set
          </h5>
          <p className="text-sm">Add one!</p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <p className="text-black dark:text-white">None</p>
        </td>
        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
          <div className="flex items-center space-x-3.5">
            <button className="hover:text-primary">
             {/* TODO Change this SVG*/}
              <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z" fill="" />
                <path d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z" fill="" />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    )}
  // For every task, create a pretty row
  return (
  <>
  {userTasks.filter((x : Task) => (x.deadline.toString().substring(8,10) == props.dateHolder) && (x.status == "ToDo" ||
   x.status == "In-Progress" || x.status == "Overdue")).map((task,index)=>{
      return (
        <>
        <tr key={task.task_id}>
          <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
            <h5 className="font-medium text-black dark:text-white">
              {task.task}
            </h5>
            <p className="text-sm">{task.description}</p>
          </td>
          <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
            <p className="text-black dark:text-white">{ dayjs(task.deadline,'YYYY-MM-DDTHH:MM:SSZ').format('ddd MMM DD, YYYY').toString() }</p>
          </td>
          <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
            <div className="flex items-center space-x-3.5">

            <button className="hover:text-primary" name="task_id" onClick={()=>{handleEditTask(task)}}>
                <svg width="18px" height="18px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M823.3 938.8H229.4c-71.6 0-129.8-58.2-129.8-129.8V215.1c0-71.6 58.2-129.8 129.8-129.8h297c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7h-297c-24.5 0-44.4 19.9-44.4 44.4V809c0 24.5 19.9 44.4 44.4 44.4h593.9c24.5 0 44.4-19.9 44.4-44.4V512c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v297c0 71.6-58.2 129.8-129.8 129.8z" fill="#3688FF" /><path d="M483 756.5c-1.8 0-3.5-0.1-5.3-0.3l-134.5-16.8c-19.4-2.4-34.6-17.7-37-37l-16.8-134.5c-1.6-13.1 2.9-26.2 12.2-35.5l374.6-374.6c51.1-51.1 134.2-51.1 185.3 0l26.3 26.3c24.8 24.7 38.4 57.6 38.4 92.7 0 35-13.6 67.9-38.4 92.7L513.2 744c-8.1 8.1-19 12.5-30.2 12.5z m-96.3-97.7l80.8 10.1 359.8-359.8c8.6-8.6 13.4-20.1 13.4-32.3 0-12.2-4.8-23.7-13.4-32.3L801 218.2c-17.9-17.8-46.8-17.8-64.6 0L376.6 578l10.1 80.8z" fill="#5F6379" /></svg>
              </button>

              <button className="hover:text-primary" name="task_id" onClick={()=>{handleDelete(task.task_id)}}>
                <svg width="18px" height="18px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M779.5 1002.7h-535c-64.3 0-116.5-52.3-116.5-116.5V170.7h768v715.5c0 64.2-52.3 116.5-116.5 116.5zM213.3 256v630.1c0 17.2 14 31.2 31.2 31.2h534.9c17.2 0 31.2-14 31.2-31.2V256H213.3z" fill="#3688FF" /><path d="M917.3 256H106.7C83.1 256 64 236.9 64 213.3s19.1-42.7 42.7-42.7h810.7c23.6 0 42.7 19.1 42.7 42.7S940.9 256 917.3 256zM618.7 128H405.3c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h213.3c23.6 0 42.7 19.1 42.7 42.7S642.2 128 618.7 128zM405.3 725.3c-23.6 0-42.7-19.1-42.7-42.7v-256c0-23.6 19.1-42.7 42.7-42.7S448 403 448 426.6v256c0 23.6-19.1 42.7-42.7 42.7zM618.7 725.3c-23.6 0-42.7-19.1-42.7-42.7v-256c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v256c-0.1 23.6-19.2 42.7-42.7 42.7z" fill="#5F6379" /></svg>
              </button>

              
            </div>
          </td>
        </tr>
        {isModalVisible && <TaskModal taskData={taskToEdit} onClose={handleModalClose}/>}
      </>
    );
    })
  } 
  </>);
  };


const TaskList = (props) => {
  //const {setTaskView} = props.setTaskView;
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => props.setTaskView(false)}></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
              <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                      <tr className="bg-gray-2 text-left dark:bg-meta-4">
                        <th className="min-w-[370px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                          Task
                        </th>
                        <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                          Due Date
                        </th>
                        <th className="py-4 px-4 font-medium text-black dark:text-white">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <TaskListRows dateHolder={props.holdDate}/>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TaskList;
  
