import useTaskContext from '../hooks/useTaskContext';
import dayjs from 'dayjs';
import { useContext, useState, useEffect } from 'react';

const TaskModal = ( props ) =>{
  const { taskData, onClose } = props;
  const { updateUserTask } = useTaskContext();
  const [formData, setFormData] = useState(taskData);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value,
      });
    };
    // Event handler to handle form submission
  const handleExit = (e) => {
    e.preventDefault();
    setFormData({
        status:'ToDo',
        task:'',
        description:'',
        deadline:dayjs(),
        priority:'5',
        category:'Other',
        notification:'None',
    });
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserTask(formData);
    setFormData({
        status:'ToDo',
        task:'',
        description:'',
        deadline:dayjs(),
        priority:'5',
        category:'Other',
        notification:'None',
    });
    onClose();
  };

  return (
    <>
    <div className="fixed inset-0 bg-black opacity-40"></div>
      <div className="relative z-50 w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-lg">
        <button onClick={handleExit} className="absolute top-0 right-0 p-4 hover:text-primary text-gray-500">
          <svg className="fill-current text-red-500" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" >
            <g opacity="0.8"> 
              <path d="M6 18L18 6M6 6l12 12" /> 
            </g> 
          </svg>
        </button>
        <form onSubmit={handleSubmit}>
          <div className="p-6.5">
              <div className="mb-3">
                <label className="mb-3 block text-black dark:text-white"> 
                  Add Task
                </label>
                <input value={formData.task} onChange={handleInputChange} id="task" name="task" type="text" placeholder="Task" className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
              </div>
              <div className="mb-3">
                <label className="mb-3 block text-black dark:text-white"> 
                  Description
                </label>
                <div>
                  <textarea  value={formData.description} onChange={handleInputChange} id="description" name="description" rows={2} placeholder="Description" className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" > 
                  </textarea>
                </div>
              </div>
              <label className="mb-3 block text-black dark:text-white"> 
                Status
              </label>
              <div className="relative z-20 bg-white dark:bg-form-input">
                <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2"> 
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" > 
                  <g opacity="0.8"> 
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0007 2.50065C5.85852 2.50065 2.50065 5.85852 2.50065 10.0007C2.50065 14.1428 5.85852 17.5007 10.0007 17.5007C14.1428 17.5007 17.5007 14.1428 17.5007 10.0007C17.5007 5.85852 14.1428 2.50065 10.0007 2.50065ZM0.833984 10.0007C0.833984 4.93804 4.93804 0.833984 10.0007 0.833984C15.0633 0.833984 19.1673 4.93804 19.1673 10.0007C19.1673 15.0633 15.0633 19.1673 10.0007 19.1673C4.93804 19.1673 0.833984 15.0633 0.833984 10.0007Z" fill="#637381" > </path> 
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.833984 9.99935C0.833984 9.53911 1.20708 9.16602 1.66732 9.16602H18.334C18.7942 9.16602 19.1673 9.53911 19.1673 9.99935C19.1673 10.4596 18.7942 10.8327 18.334 10.8327H1.66732C1.20708 10.8327 0.833984 10.4596 0.833984 9.99935Z" fill="#637381" > </path> 
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.50084 10.0008C7.55796 12.5632 8.4392 15.0301 10.0006 17.0418C11.5621 15.0301 12.4433 12.5632 12.5005 10.0008C12.4433 7.43845 11.5621 4.97153 10.0007 2.95982C8.4392 4.97153 7.55796 7.43845 7.50084 10.0008ZM10.0007 1.66749L9.38536 1.10547C7.16473 3.53658 5.90275 6.69153 5.83417 9.98346C5.83392 9.99503 5.83392 10.0066 5.83417 10.0182C5.90275 13.3101 7.16473 16.4651 9.38536 18.8962C9.54325 19.069 9.76655 19.1675 10.0007 19.1675C10.2348 19.1675 10.4581 19.069 10.6159 18.8962C12.8366 16.4651 14.0986 13.3101 14.1671 10.0182C14.1674 10.0066 14.1674 9.99503 14.1671 9.98346C14.0986 6.69153 12.8366 3.53658 10.6159 1.10547L10.0007 1.66749Z" fill="#637381" > </path> 
                  </g> 
                </svg> 
                </span>
                <select  value={formData.status} id="status" name="status" onChange={handleInputChange} className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"> 
                  <option value="ToDo">To Do</option> 
                  <option value="In-Progress">In-Progress</option> 
                  <option value="Complete">Complete</option> 
                  <option value="Overdue">Overdue</option> 
                </select>
                <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2"> 
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > 
                    <g opacity="0.8"> 
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="#637381" >
                      </path> 
                    </g> 
                  </svg> 
                </span>
              </div>
              <label className="mb-3 block text-black dark:text-white"> 
                Priority
              </label>
              <div className="relative z-20 bg-white dark:bg-form-input">
                <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2"> 
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" > 
                  <g opacity="0.8"> 
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0007 2.50065C5.85852 2.50065 2.50065 5.85852 2.50065 10.0007C2.50065 14.1428 5.85852 17.5007 10.0007 17.5007C14.1428 17.5007 17.5007 14.1428 17.5007 10.0007C17.5007 5.85852 14.1428 2.50065 10.0007 2.50065ZM0.833984 10.0007C0.833984 4.93804 4.93804 0.833984 10.0007 0.833984C15.0633 0.833984 19.1673 4.93804 19.1673 10.0007C19.1673 15.0633 15.0633 19.1673 10.0007 19.1673C4.93804 19.1673 0.833984 15.0633 0.833984 10.0007Z" fill="#637381" > </path> 
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.833984 9.99935C0.833984 9.53911 1.20708 9.16602 1.66732 9.16602H18.334C18.7942 9.16602 19.1673 9.53911 19.1673 9.99935C19.1673 10.4596 18.7942 10.8327 18.334 10.8327H1.66732C1.20708 10.8327 0.833984 10.4596 0.833984 9.99935Z" fill="#637381" > </path> 
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.50084 10.0008C7.55796 12.5632 8.4392 15.0301 10.0006 17.0418C11.5621 15.0301 12.4433 12.5632 12.5005 10.0008C12.4433 7.43845 11.5621 4.97153 10.0007 2.95982C8.4392 4.97153 7.55796 7.43845 7.50084 10.0008ZM10.0007 1.66749L9.38536 1.10547C7.16473 3.53658 5.90275 6.69153 5.83417 9.98346C5.83392 9.99503 5.83392 10.0066 5.83417 10.0182C5.90275 13.3101 7.16473 16.4651 9.38536 18.8962C9.54325 19.069 9.76655 19.1675 10.0007 19.1675C10.2348 19.1675 10.4581 19.069 10.6159 18.8962C12.8366 16.4651 14.0986 13.3101 14.1671 10.0182C14.1674 10.0066 14.1674 9.99503 14.1671 9.98346C14.0986 6.69153 12.8366 3.53658 10.6159 1.10547L10.0007 1.66749Z" fill="#637381" > </path> 
                  </g> 
                </svg> 
                </span>
                <select  value={formData.priority} id="priority" name="priority" onChange={handleInputChange} className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"> 
                  <option value="5"> Highest</option> 
                  <option value="4">High</option> 
                  <option value="3">Medium</option> 
                  <option value="2">Low</option> 
                  <option value="1">Lowest</option> 
                </select>
                <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2"> 
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > 
                    <g opacity="0.8"> 
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="#637381" >
                      </path> 
                    </g> 
                  </svg> 
                </span>
              </div>
              <label className="mb-3 block text-black dark:text-white"> 
                Notifications
              </label>
              <div className="relative z-20 bg-white dark:bg-form-input">
                <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2"> 
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" > 
                  <g opacity="0.8"> 
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0007 2.50065C5.85852 2.50065 2.50065 5.85852 2.50065 10.0007C2.50065 14.1428 5.85852 17.5007 10.0007 17.5007C14.1428 17.5007 17.5007 14.1428 17.5007 10.0007C17.5007 5.85852 14.1428 2.50065 10.0007 2.50065ZM0.833984 10.0007C0.833984 4.93804 4.93804 0.833984 10.0007 0.833984C15.0633 0.833984 19.1673 4.93804 19.1673 10.0007C19.1673 15.0633 15.0633 19.1673 10.0007 19.1673C4.93804 19.1673 0.833984 15.0633 0.833984 10.0007Z" fill="#637381" > </path> 
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.833984 9.99935C0.833984 9.53911 1.20708 9.16602 1.66732 9.16602H18.334C18.7942 9.16602 19.1673 9.53911 19.1673 9.99935C19.1673 10.4596 18.7942 10.8327 18.334 10.8327H1.66732C1.20708 10.8327 0.833984 10.4596 0.833984 9.99935Z" fill="#637381" > </path> 
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.50084 10.0008C7.55796 12.5632 8.4392 15.0301 10.0006 17.0418C11.5621 15.0301 12.4433 12.5632 12.5005 10.0008C12.4433 7.43845 11.5621 4.97153 10.0007 2.95982C8.4392 4.97153 7.55796 7.43845 7.50084 10.0008ZM10.0007 1.66749L9.38536 1.10547C7.16473 3.53658 5.90275 6.69153 5.83417 9.98346C5.83392 9.99503 5.83392 10.0066 5.83417 10.0182C5.90275 13.3101 7.16473 16.4651 9.38536 18.8962C9.54325 19.069 9.76655 19.1675 10.0007 19.1675C10.2348 19.1675 10.4581 19.069 10.6159 18.8962C12.8366 16.4651 14.0986 13.3101 14.1671 10.0182C14.1674 10.0066 14.1674 9.99503 14.1671 9.98346C14.0986 6.69153 12.8366 3.53658 10.6159 1.10547L10.0007 1.66749Z" fill="#637381" > </path> 
                  </g> 
                </svg> 
                </span>
                <select  value={formData.notification} id="notification" name="notification" onChange={handleInputChange} className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"> 
                  <option value="None">None </option> 
                  <option value="Desktop">Desktop </option> 
                  <option value="Email">Email </option> 
                  <option value="Both">Both </option> 
                </select>
                <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2"> 
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > 
                    <g opacity="0.8"> 
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="#637381" >
                      </path> 
                    </g> 
                  </svg> 
                </span>
              </div>
              <div className="mb-3 block">
                <label className="mb-3 block text-black dark:text-white"> 
                  Deadline
                </label>
                <div className="relative">
                  <input value={formData.deadline} onChange={handleInputChange} id="deadline" name="deadline" type="date" className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" />
                </div>
              </div>
              <label className="mb-3 block text-black dark:text-white"> 
                Category
              </label>
              <div className="relative z-20 bg-white dark:bg-form-input">
                <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2"> 
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" > 
                  <g opacity="0.8"> 
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0007 2.50065C5.85852 2.50065 2.50065 5.85852 2.50065 10.0007C2.50065 14.1428 5.85852 17.5007 10.0007 17.5007C14.1428 17.5007 17.5007 14.1428 17.5007 10.0007C17.5007 5.85852 14.1428 2.50065 10.0007 2.50065ZM0.833984 10.0007C0.833984 4.93804 4.93804 0.833984 10.0007 0.833984C15.0633 0.833984 19.1673 4.93804 19.1673 10.0007C19.1673 15.0633 15.0633 19.1673 10.0007 19.1673C4.93804 19.1673 0.833984 15.0633 0.833984 10.0007Z" fill="#637381" > </path> 
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.833984 9.99935C0.833984 9.53911 1.20708 9.16602 1.66732 9.16602H18.334C18.7942 9.16602 19.1673 9.53911 19.1673 9.99935C19.1673 10.4596 18.7942 10.8327 18.334 10.8327H1.66732C1.20708 10.8327 0.833984 10.4596 0.833984 9.99935Z" fill="#637381" > </path> 
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.50084 10.0008C7.55796 12.5632 8.4392 15.0301 10.0006 17.0418C11.5621 15.0301 12.4433 12.5632 12.5005 10.0008C12.4433 7.43845 11.5621 4.97153 10.0007 2.95982C8.4392 4.97153 7.55796 7.43845 7.50084 10.0008ZM10.0007 1.66749L9.38536 1.10547C7.16473 3.53658 5.90275 6.69153 5.83417 9.98346C5.83392 9.99503 5.83392 10.0066 5.83417 10.0182C5.90275 13.3101 7.16473 16.4651 9.38536 18.8962C9.54325 19.069 9.76655 19.1675 10.0007 19.1675C10.2348 19.1675 10.4581 19.069 10.6159 18.8962C12.8366 16.4651 14.0986 13.3101 14.1671 10.0182C14.1674 10.0066 14.1674 9.99503 14.1671 9.98346C14.0986 6.69153 12.8366 3.53658 10.6159 1.10547L10.0007 1.66749Z" fill="#637381" > </path> 
                  </g> 
                </svg> 
                </span>
                <select value={formData.category} id="category" name="category" onChange={handleInputChange} className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"> 
                  <option value="Work">Work </option> 
                  <option value="School">School </option> 
                  <option value="Chores">Chores </option> 
                  <option value="Personal">Personal </option> 
                  <option value="Other">Other </option> 
                </select>
                <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2"> 
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > 
                    <g opacity="0.8"> 
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="#637381" > </path> 
                    </g> 
                  </svg> 
                </span>
              </div>
              <button type="submit" className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"> 
                Update Task
              </button>
            </div>
        </form>
      </div>
    </>
  )
}

export default TaskModal;

