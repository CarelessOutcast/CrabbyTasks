
/*************************************************************************
 * WORK-IN-PROGRESS: 
 *    Update the user settings through this form (Settings page)
 *
 * Component: ModalSettings
 *
 * Logic: This file defines a React component for a settings modal.
 * The modal allows users to input settings related to User settings.
 *  
 * Used in User Settings 
 *
 * Type: Component
*************************************************************************/



import React, { useState } from "react";
import dataJSON from '../../public/data.json';

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  
  const [formState, setFormState] = useState(
    defaultValue || {
      email: "",
      username: "price",
    }
  );
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    closeModal();
  };

  return (
    <div
      className="modal-container fixed z-50 flex top-25 bottom-5 "
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
    
      <div className="modal rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark overflow-auto">
      <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
        <div className="w-full flex justify-end">
      <strong className="text-xl align-center cursor-pointer "
      onClick={closeModal}
      >&times;</strong>
      </div>
        <form>
        <div className="grid grid-cols-3 gap-5 justify-normal">
          <div className="form-group w-full col-span-3">
            <label  className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="id">Bond ID (Input "ALL" to track all bonds with paramaters below)</label>
            <input className="w-full rounded border border-stroke bg-gray py-3 pl-3 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary" name="email" onChange={handleChange} value={formState.email} />
          </div>
          
          <div className="form-group ">
            <label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="para">Parameter</label>
            <div className="relative z-20 w-full rounded border border-stroke p-1.5 pr-8 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                  <div className="flex flex-wrap items-center"></div>
                  <span className="m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray py-1.5 px-2.5 text-sm font-medium dark:border-strokedark dark:bg-white/30">
                      {formState.username}
                  </span>
                    <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <g opacity="0.8">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" fill="#637381" ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
            </div>
          
          <br></br>
          <button className="btn flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
                      type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      </div>
    </div>
    
  );
};
