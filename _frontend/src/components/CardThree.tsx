import { useEffect, useState, useContext } from 'react';
import React, { ComponentType } from 'react';
import Loader from '../common/Loader';

import { Task } from '../interfaces/Task';
import TaskContext from '../context/TaskContext';
import TaskProvider from '../context/TaskProvider';

const CardThree = () => {

  const {userTasks, getUserTasks} = useContext(TaskContext);

  const itemCounter = (index : String) => {
    if (userTasks && userTasks.length != 0)
    {
      return userTasks.filter((x : Task) => x.status == index).length;
    }
    else
    {
      return 0;
    }
  };
  
  
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#34D399]">
      <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2984 0.826822L15.2868 0.811827L15.2741 0.797751C14.9173 0.401867 14.3238 0.400754 13.9657 0.794406L5.91888 9.45376L2.05667 5.2868C1.69856 4.89287 1.10487 4.89389 0.747996 5.28987C0.417335 5.65675 0.417335 6.22337 0.747996 6.59026L0.747959 6.59029L0.752701 6.59541L4.86742 11.0348C5.14445 11.3405 5.52858 11.5 5.89581 11.5C6.29242 11.5 6.65178 11.3355 6.92401 11.035L15.2162 2.11161C15.5833 1.74452 15.576 1.18615 15.2984 0.826822Z"
                  fill="white"
                  stroke="white"
                ></path>
              </svg>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {itemCounter("Complete")}
          </h4>
          <span className="text-sm font-medium">Completed Tasks</span>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
