
/*************************************************************************
 * Component: CardFive
 *
 * Logic: This file defines a React component for displaying task statistics in
 * a card format. It imports the 'useTaskContext' hook to access user task
 * statistics and 'useEffect' for handling side effects. Inside the component,
 * it logs userTasksStats and displays task statistics, including tasks in
 * progress. The card has a rounded border, a background color, and a shadow for
 * styling. 
 *
 * Type: Component
*************************************************************************/

import useTaskContext from '../hooks/useTaskContext';
import { useEffect } from 'react';

const CardFive = (props) => {
  const { userTasksStats } = useTaskContext();

  useEffect(()=>{
    },[]);

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
       <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#f0e269] dark:bg-[#f0e269]">
          <svg width="18px" height="18px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M809.3 1024H214.7c-71.3 0-129.4-58-129.4-129.4V129.4C85.3 58 143.4 0 214.7 0h594.6c71.3 0 129.4 58 129.4 129.4v765.3c0 71.3-58.1 129.3-129.4 129.3zM214.7 85.3c-24.3 0-44 19.8-44 44v765.3c0 24.3 19.8 44 44 44h594.6c24.3 0 44-19.8 44-44V129.4c0-24.3-19.8-44-44-44H214.7z" fill="#3688FF" /><path d="M426.7 1024H213.3c-70.6 0-128-57.4-128-128V682.7h213.4c70.6 0 128 57.4 128 128V1024z m-256-256v128c0 23.5 19.1 42.6 42.6 42.6h128v-128c0-23.5-19.1-42.6-42.6-42.6h-128zM810.7 1024H597.3V810.6c0-70.6 57.4-128 128-128h213.4V896c0 70.6-57.4 128-128 128z m-128-85.3h128c23.5 0 42.6-19.1 42.6-42.6V768h-128c-23.5 0-42.6 19.1-42.6 42.6v128.1zM448 355.6H277.3c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7H448c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7zM661.3 533.3h-384c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h384c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7z" fill="#5F6379" /></svg>
        </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
              {userTasksStats?.inProgress}
          </h4>
          <span className="text-sm font-medium">Tasks In-Progress</span>
        </div>
      </div>
    </div>
  );
};

export default CardFive;
  
