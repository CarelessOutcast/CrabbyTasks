import {useEffect, useState} from 'react'

const tempdb = [
  {
      "task_id": "397bd988-f431-46f9-8f24-28b4f066fb5c",
      "user_id": 10,
      "task": "Some Task",
      "description": "More Description",
      "status": "ToDo",
      "created_at": "2023-10-21T20:57:41Z",
      "priority": "1",
      "category": "Other",
      "notifications": "None",
      "deadline": "2023-10-22T15:57:00Z"
  },
  {
      "task_id": "e6606d0a-2a90-48a0-a70e-fd9aac30b36a",
      "user_id": 1,
      "task": "Yahyeet",
      "description": "Kokonut",
      "status": "ToDo",
      "created_at": "2023-10-24T17:10:27Z",
      "priority": "2",
      "category": "Chores",
      "notifications": "Both",
      "deadline": "2023-10-25T17:11:01Z"
  },
  {
      "task_id": "21a85446-e164-4ac0-a1d6-62fae5122e43",
      "user_id": 1,
      "task": "Login Logic",
      "description": "Create the Backend logic for Sign in",
      "status": "ToDo",
      "created_at": "2023-10-20T10:24:43Z",
      "priority": "1",
      "category": "Other",
      "notifications": "None",
      "deadline": "2023-10-21T00:00:00Z"
  },
  {
      "task_id": "7387f95c-6f9f-4ac5-af0d-aa4d1ea02dc5",
      "user_id": 1,
      "task": "Another Tasks for myself",
      "description": "Tsk Tsk",
      "status": "Overdue",
      "created_at": "2023-10-22T00:33:02Z",
      "priority": "1",
      "category": "Other",
      "notifications": "None",
      "deadline": "2023-10-23T19:32:00Z"
  },
  {
      "task_id": "c901843f-702f-44b8-8072-c3740e4eaf6a",
      "user_id": 10,
      "task": "Completed Example",
      "description": "I did it!",
      "status": "Overdue",
      "created_at": "2023-10-21T19:36:00Z",
      "priority": "1",
      "category": "Other",
      "notifications": "None",
      "deadline": "2023-10-06T19:36:00Z"
  },
  {
      "task_id": "397bd988-f431-46f9-8f24-28b4f066fb5c",
      "user_id": 10,
      "task": "Another Task",
      "description": "Task Description",
      "status": "In-Progress",
      "created_at": "2023-10-21T20:57:08Z",
      "priority": "1",
      "category": "Other",
      "notifications": "None",
      "deadline": "2023-10-22T15:57:00Z"
  },
  {
      "task_id": "7387f95c-6f9f-4ac5-af0d-aa4d1ea02dc5",
      "user_id": 1,
      "task": "Filtering Views per user",
      "description": "Right now I have access to everything for simplicity",
      "status": "In-Progress",
      "created_at": "2023-10-22T00:32:30Z",
      "priority": "1",
      "category": "Other",
      "notifications": "None",
      "deadline": "2023-10-23T19:32:00Z"
  },
  {
      "task_id": "451812ec-7859-44bd-8584-8485be3f7068",
      "user_id": 1,
      "task": "Careless DONE",
      "description": "Careless DONE",
      "status": "Complete",
      "created_at": "2023-10-22T00:47:02.284487Z",
      "priority": "1",
      "category": "Other",
      "notifications": "None",
      "deadline": "2023-10-22T19:46:00Z"
  },
  {
      "task_id": "94241c3f-13c6-4c49-bca3-fc2342e522ce",
      "user_id": 10,
      "task": "carlos finish",
      "description": "carlos finished this task",
      "status": "Complete",
      "created_at": "2023-10-22T00:43:38.602153Z",
      "priority": "1",
      "category": "Other",
      "notifications": "None",
      "deadline": "2023-10-12T19:43:00Z"
  }
];

const itemCounter = (index : String) => {
  return tempdb.filter((x) => x.status == index).length;
};

const CardThree = () => {
  const [completedTasks, setCompletedTasks] = useState(itemCounter("Complete"));
  useEffect(() => {
    [completedTasks, itemCounter("Completed")];
  }
  
  )
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
