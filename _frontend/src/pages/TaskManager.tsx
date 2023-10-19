import React, { SetStateAction, useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ReactDOM from 'react-dom';




const TaskManager = () => {
  const [calendarView, setCalendarView] = useState("Month"); //Default calendar view is monthly
  const [taskView, setTaskView] = useState(false); //Default is that task menu is not open


  const handleCalendarChange = (view: SetStateAction<string>) => {
    setCalendarView(view);

  }

  useEffect(() => {
    // This function will be triggered only when taskView changes
    // Code to make on screen task menu appear goes here:
    
  }, [taskView]);

  const openTasks = (date: string) => {
    setTaskView(true);
    //Retrieve tasks for inputted date code here? or in reaction to changing taskview:

  }

  const TaskList = () => {
    return(
      <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setTaskView(!taskView)}></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                      Modal Title
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm leading-5 text-gray-500">This is the content of the modal.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    onClick={() => setTaskView(!taskView)}
                  >
                    Close
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
    )
  }

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
                    1
                  </span>
                  <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                    <span className="group-hover:text-primary md:hidden">
                      More
                    </span>
                    <div className="event invisible absolute left-2 z-99 mb-1 flex w-[200%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[190%] md:opacity-100">
                      <span className="event-name text-sm font-semibold text-black dark:text-white">
                        Redesign Website
                      </span>
                      <span className="time text-sm font-medium text-black dark:text-white">
                        1 Dec - 2 Dec
                      </span>
                    </div>
                  </div>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    2
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    3
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    4
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    5
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    6
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    7
                  </span>
                </td>
              </tr>
              {/* <!-- Line 1 --> */}
              {/* <!-- Line 2 --> */}
              <tr className="grid grid-cols-7">
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    8
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    9
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    10
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    11
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    12
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    13
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    14
                  </span>
                </td>
              </tr>
              {/* <!-- Line 2 --> */}
              {/* <!-- Line 3 --> */}
              <tr className="grid grid-cols-7">
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    15
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    16
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    17
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    18
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    19
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    20
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    21
                  </span>
                </td>
              </tr>
              {/* <!-- Line 3 --> */}
              {/* <!-- Line 4 --> */}
              <tr className="grid grid-cols-7">
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    22
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    23
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    24
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    25
                  </span>
                  <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                    <span className="group-hover:text-primary md:hidden">
                      More
                    </span>
                    <div className="event invisible absolute left-2 z-99 mb-1 flex w-[300%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[290%] md:opacity-100">
                      <span className="event-name text-sm font-semibold text-black dark:text-white">
                        App Design
                      </span>
                      <span className="time text-sm font-medium text-black dark:text-white">
                        25 Dec - 27 Dec
                      </span>
                    </div>
                  </div>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    26
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    27
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    28
                  </span>
                </td>
              </tr>
              {/* <!-- Line 4 --> */}
              {/* <!-- Line 5 --> */}
              <tr className="grid grid-cols-7">
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    29
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    30
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    31
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    1
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    2
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">
                    3
                  </span>
                </td>
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
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
                  onClick={() => openTasks("1/1")}>
                  <span className="font-medium text-black dark:text-white">1</span>
                  {/* Add your content for each cell here */}
                </td>
                {/* Monday */}
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">2</span>
                  {/* Add your content for each cell here */}
                </td>
                {/* Tuesday */}
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">3</span>
                  {/* Add your content for each cell here */}
                </td>
                {/* Wednesday */}
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">4</span>
                  {/* Add your content for each cell here */}
                </td>
                {/* Thursday */}
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">5</span>
                  {/* Add your content for each cell here */}
                </td>
                {/* Friday */}
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">6</span>
                  {/* Add your content for each cell here */}
                </td>
                {/* Saturday */}
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                  <span className="font-medium text-black dark:text-white">7</span>
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
          <table className="w-full">
            <thead>
              <tr className="grid grid-cols-1 rounded-t-sm bg-primary text-white">
                <th className="flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5 text-center">
                  <div className="flex justify-center w-full">Sunday 1/1</div> {/* Replace with actual current date later */}
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Weekly calendar rows */}
              <tr className="grid grid-cols-1">
                {/* Sunday */}
                <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31 flex items-center justify-center text-center">
                  <span className="font-medium text-black dark:text-white"></span>
                  {/* Add your content for each cell here */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };

  return (
    <>
      <Breadcrumb pageName="TaskManager" /> {/*Title that goes above calendar/page content */}

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
      {taskView && (
        <TaskList/>
      )}
      {/* <!-- ====== Calendar Section End ====== --> */}
    </>
  );
};

export default TaskManager;
