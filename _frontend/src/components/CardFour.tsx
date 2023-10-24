

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

const CardFour = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#F87171]">
      <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.4917 7.65579L11.106 12.2645C11.2545 12.4128 11.4715 12.5 11.6738 12.5C11.8762 12.5 12.0931 12.4128 12.2416 12.2645C12.5621 11.9445 12.5623 11.4317 12.2423 11.1114C12.2422 11.1113 12.2422 11.1113 12.2422 11.1113C12.242 11.1111 12.2418 11.1109 12.2416 11.1107L7.64539 6.50351L12.2589 1.91221L12.2595 1.91158C12.5802 1.59132 12.5802 1.07805 12.2595 0.757793C11.9393 0.437994 11.4268 0.437869 11.1064 0.757418C11.1063 0.757543 11.1062 0.757668 11.106 0.757793L6.49234 5.34931L1.89459 0.740581L1.89396 0.739942C1.57364 0.420019 1.0608 0.420019 0.740487 0.739944C0.42005 1.05999 0.419837 1.57279 0.73985 1.89309L6.4917 7.65579ZM6.4917 7.65579L1.89459 12.2639L1.89395 12.2645C1.74546 12.4128 1.52854 12.5 1.32616 12.5C1.12377 12.5 0.906853 12.4128 0.758361 12.2645L1.1117 11.9108L0.758358 12.2645C0.437984 11.9445 0.437708 11.4319 0.757539 11.1116C0.757812 11.1113 0.758086 11.111 0.75836 11.1107L5.33864 6.50287L0.740487 1.89373L6.4917 7.65579Z"
                  fill="#ffffff"
                  stroke="#ffffff"
                ></path>
              </svg>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {itemCounter("Overdue")}
          </h4>
          <span className="text-sm font-medium">Overdue Tasks</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-5">
          Boo!
          <svg
            className="fill-meta-5"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CardFour;
