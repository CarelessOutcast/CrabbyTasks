import { SetStateAction, useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import TaskList from '../components/TaskList';
import TaskChart from '../components/TaskChart';
import useAxios from '../hooks/useAxios';

// Common Interface imports
import { Task } from '../interfaces/Task';

import { useContext } from 'react';
import React, { ComponentType } from 'react';
import Loader from '../common/Loader';
import TaskContext from '../context/TaskContext';
import TaskProvider from '../context/TaskProvider';

const TaskManager = () => {
  const [calendarView, setCalendarView] = useState("Month"); //Default calendar view is monthly
  const [taskView, setTaskView] = useState(false); //Default is that task menu is not open
  const [canCheckDates, setDateBool] = useState(false);

  const handleCalendarChange = (view: SetStateAction<string>) => {
    setCalendarView(view);
  }

  const openTasks = (date: string) => {
    setTaskView(true);
    setDateBool(true);
  }

  const {userTasks, getUserTasks} = useContext(TaskContext);

  const handleDateCheck = (dateDay : String) => {
    if (canCheckDates == true && userTasks.length != 0)
    {
      
      return userTasks.filter((x : Task) => (x.deadline.toString().substring(8,10) == dateDay) && x.status == "ToDo").length;
    }
    else
    {
      return 0;
    }
  };


  const MonthCalendar = () => {
    return (
      <>
        <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <table className="w-full">
            <thead>
              <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-white">
                <th className="flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                  <span className="hidden lg:block"> Sunday </span>
                  <span className="block lg:hidden"> Sun </span>
                </th>
                <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                  <span className="hidden lg:block"> Monday </span>
                  <span className="block lg:hidden"> Mon </span>
                </th>
                <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                  <span className="hidden lg:block"> Tuesday </span>
                  <span className="block lg:hidden"> Tue </span>
                </th>
                <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                  <span className="hidden lg:block"> Wednesday </span>
                  <span className="block lg:hidden"> Wed </span>
                </th>
                <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                  <span className="hidden lg:block"> Thursday </span>
                  <span className="block lg:hidden"> Thur </span>
                </th>
                <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                  <span className="hidden lg:block"> Friday </span>
                  <span className="block lg:hidden"> Fri </span>
                </th>
                <th className="flex h-15 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                  <span className="hidden lg:block"> Saturday </span>
                  <span className="block lg:hidden"> Sat </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- Line 1 --> */}
              <tr className="grid grid-cols-7">
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    <div>
                      1
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("01")}    
                    </div>
                  </span>

                  
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      2
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("02")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      3
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("03")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      4
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("04")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      5
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("05")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      6
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("06")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      7
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("07")}    
                    </div>
                  </span>
                </td>
              </tr>
              {/* <!-- Line 1 --> */}
              {/* <!-- Line 2 --> */}
              <tr className="grid grid-cols-7">
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      8
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("08")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      9
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("09")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      10
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("10")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      11
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("11")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      12
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("12")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      13
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("13")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      14
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("14")}    
                    </div>
                  </span>
                </td>
              </tr>
              {/* <!-- Line 2 --> */}
              {/* <!-- Line 3 --> */}
              <tr className="grid grid-cols-7">
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      15
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("15")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      16
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("16")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      17
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("17")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      18
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("18")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      19
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("19")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      20
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("20")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      21
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("21")}    
                    </div>
                  </span>
                </td>
              </tr>
              {/* <!-- Line 3 --> */}
              {/* <!-- Line 4 --> */}
              <tr className="grid grid-cols-7">
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      22
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("22")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      23
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("23")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      24
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("24")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      25
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("25")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      26
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("26")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      27
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("27")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      28
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("28")}    
                    </div>
                  </span>
                </td>
              </tr>
              {/* <!-- Line 4 --> */}
              {/* <!-- Line 5 --> */}
              <tr className="grid grid-cols-7">
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      29
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("29")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      30
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("30")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      31
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("31")}    
                    </div>
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    1
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    2
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    3
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    4
                  </span>
                </td>
              </tr>
              {/* <!-- Line 5 --> */}
            </tbody>
          </table>
        </div>
        {/* <!-- ====== Calendar Section End ====== --> */}
      </>
    );
  };

  const WeekCalendar = () => {
    return (
      <>
        <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <table className="w-full">
            <thead>
              <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-white">
                <th className="flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                  Sun
                </th>
                <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                  Mon
                </th>
                <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                  Tue
                </th>
                <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                  Wed
                </th>
                <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                  Thur
                </th>
                <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                  Fri
                </th>
                <th className="flex h-15 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                  Sat
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Weekly calendar rows */}
              <tr className="grid grid-cols-7">
                {/* Sunday */}
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31"
                  onClick={() => openTasks("1/1") }>
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      22
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("22")}    
                    </div>
                    
                  </span>
                </td>
                {/* Monday */}
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      23
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("23")}    
                    </div>
                    
                    </span>
                  {/* Add your content for each cell here */}
                </td>
                {/* Tuesday */}
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    
                  <div>
                      24
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("24")}    
                    </div>
                    
                    </span>
                  {/* Add your content for each cell here */}
                </td>
                {/* Wednesday */}
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      25
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("25")}    
                    </div>
                    
                    </span>
                  {/* Add your content for each cell here */}
                </td>
                {/* Thursday */}
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      26
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("26")}    
                    </div>
                    </span>
                  {/* Add your content for each cell here */}
                </td>
                {/* Friday */}
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      27
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("27")}    
                    </div>
                  </span>
                  {/* Add your content for each cell here */}
                </td>
                {/* Saturday */}
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                  <div>
                      28
                    </div>    
                    <div className="ml-40 mt-8 text-danger">

                      {handleDateCheck("28")}    
                    </div>
                    </span>
                  {/* Add your content for each cell here */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };

  const DayCalendar = () => {
    return (
      <>
        <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <TaskChart/>
        </div>
      </>
    );
  };

  return (
    <>
      <Breadcrumb pageName="Task Manager" /> {/*Title that goes above calendar/page content */}

      {/* Day Week Month Buttons Start */}
      <div className="flex justify-end">
        <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
          <button className={`rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark ${calendarView === 'Day' ? 'bg-white shadow-card dark:bg-boxdark' : ''}`}
            onClick={() => handleCalendarChange("Day")}>
            Day
          </button>
          <button className={`rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark ${calendarView === 'Week' ? 'bg-white shadow-card dark:bg-boxdark' : ''}`}
            onClick={() => handleCalendarChange("Week")}>
            Week
          </button>
          <button className={`rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark ${calendarView === 'Month' ? 'bg-white shadow-card dark:bg-boxdark' : ''}`}
            onClick={() => handleCalendarChange("Month")}>
            Month
          </button>
        </div>
      </div>
      {/* Day Week Month Buttons End */}

      {/* <!-- ====== Calendar Section Start ====== --> */}
      {calendarView === "Month" && (<MonthCalendar />)}
      {calendarView === "Week" && (<WeekCalendar />)}
      {calendarView === "Day" && (<DayCalendar />)}
      {/* {taskView && ( openTaskList())} */}

      {taskView && (<TaskList setTaskView={setTaskView}/>)}
      {/* <!-- ====== Calendar Section End ====== --> */}
    </>
  );
};

export default TaskManager;
