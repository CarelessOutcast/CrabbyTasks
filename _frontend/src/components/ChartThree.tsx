
/*************************************************************************
 * Component: ChartThree
 *
 * Logic: This file defines a React component for displaying task analytics
 * using a donut chart. It imports necessary dependencies, including
 * 'ApexOptions' for chart configuration, and 'ReactApexChart' for rendering the
 * chart. The component also imports other required interfaces and
 * hooks. It sets up chart options and initializes chart data using the
 * 'useTaskContext' hook. The component calculates and displays the percentage
 * of tasks completed, to-do, overdue, and in-progress.
 *
 * Type: Component
*************************************************************************/

import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import { useEffect, useContext } from 'react';
import { ComponentType } from 'react';

import { Task } from '../interfaces/Task';
import useTaskContext from '../hooks/useTaskContext';

interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    type: 'donut',
  },
  colors: ['#10B981', '#375E83', '#259AE6', '#FFA70B'],
  labels: ['Complete', 'To-Do', 'Overdue', 'In-Progress'],
  legend: {
    show: true,
    position: 'bottom',
  },

  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartThree: React.FC = () => {
  const {userTasks, userTasksStats } = useTaskContext();

  const chartItems = [
    {
      title: "Completed",
      percent: 65,
      color:'Primary',
      },
    {
      title: "Incomplete",
      percent: 34,
      color:'Primary',
      },
    {
      title: "Past",
      percent: 12,
      color:'Primary',
      },
    {
      title: "Past",
      percent: 56,
      color:'Primary',
      },
    ];

  const [state, setState] = useState<ChartThreeState>({
    series: [userTasksStats.completed, userTasksStats.todo, userTasksStats.overdue , userTasksStats.inProgress],
  });

  useEffect(()=>{
    setState({
      series: [
      userTasksStats.completed,
      userTasksStats.todo, 
      userTasksStats.overdue ,
      userTasksStats.inProgress
      ],
    });
    },[])

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-4">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Task Analytics
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#10B981]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Completed </span>
              <span> {userTasks?.length > 0 ? ((state.series.at(0) / userTasks.length ) * 100).toFixed(0) : 0}% </span>
            </p>
          </div>
        </div>

        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#375E83]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> To-Do </span>
              <span> {userTasks?.length  > 0 ? ((state.series.at(1) / userTasks.length ) * 100).toFixed(0) : 0}% </span>
            </p>
          </div>
        </div>

        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#259AE6]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Overdue </span>
              <span> {userTasks?.length  > 0 ? ((state.series.at(2) / userTasks.length ) * 100).toFixed(0) : 0}% </span>
            </p>
          </div>
        </div>

        <div className="w-full px-8 sm:w-1/2">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#FFA70B]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> In-Progress </span>
              <span> {userTasks?.length  > 0 ? ((state.series.at(3) / userTasks.length ) * 100).toFixed(0) : 0}% </span>
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ChartThree;
