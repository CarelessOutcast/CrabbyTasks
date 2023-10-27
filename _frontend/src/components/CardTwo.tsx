import { useEffect, useState, useContext } from 'react';
import React, { ComponentType } from 'react';
import Loader from '../common/Loader';

import { Task } from '../interfaces/Task';
import TaskContext from '../context/TaskContext';
import TaskProvider from '../context/TaskProvider';

const CardTwo = () => {
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
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#9deffa] dark:bg-[#9deffa]">
        <svg width="18px" height="18px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M277.3 469.3m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#5F6379" /><path d="M344.7 978.2c-5.2 0-10.4-0.8-15.5-2.5-13.8-4.5-24.8-14.8-30.4-28.1l-39.3-94.2H128.3C57.5 853.3 0 795.8 0 725.1V213.6C0 142.9 57.5 85.3 128.3 85.3h767.5c70.7 0 128.3 57.5 128.3 128.3v511.5c0 70.7-57.5 128.3-128.3 128.3H566.5L370.2 971.1c-7.7 4.7-16.6 7.1-25.5 7.1z m-18.3-80.3s-0.1 0 0 0zM128.3 170.7c-23.7 0-42.9 19.3-42.9 42.9v511.5c0 23.7 19.3 42.9 42.9 42.9h188.2l45.3 108.7L542.9 768h352.9c23.7 0 42.9-19.3 42.9-42.9V213.6c0-23.7-19.3-42.9-42.9-42.9H128.3z" fill="#3688FF" /><path d="M512 469.3m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#5F6379" /><path d="M746.7 469.3m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#5F6379" /></svg>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {itemCounter("ToDo")}
          </h4>
          <span className="text-sm font-medium">Tasks To-Do</span>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
