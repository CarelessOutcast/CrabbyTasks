
/*************************************************************************
 * Component: CheckboxFour
 *
 * Logic: This file defines a React component for rendering a pair of checkboxes
 * with labels. It uses the state to track the checked state of both checkboxes
 * and toggles them when one is clicked.
 *
 * Settings page: Notifications Settings  
 *
 * Type: Component
*************************************************************************/

import { useState } from 'react';

const CheckboxFour = () => {
  const [firIsChecked, firSetIsChecked] = useState<boolean>(true);
  const [secIsChecked, secSetIsChecked] = useState<boolean>(false);

  return (
    <div>
      <label
        htmlFor="checkboxLabelFour"
        className="flex cursor-pointer select-none items-center mb-4"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="checkboxLabelFour"
            className="sr-only"
            onChange={() => {
              secSetIsChecked(!secIsChecked);
              firSetIsChecked(!firIsChecked);
            }}
          />
          <div
            className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
              firIsChecked && 'border-primary'
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                firIsChecked && '!bg-primary'
              }`}
            >
              {' '}
            </span>
          </div>
        </div>
        Desktop Notifications
      </label>
      <label
        htmlFor="checkboxLabelFour_sec"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative2">
          <input
            type="checkbox"
            id="checkboxLabelFour_sec"
            className="sr-only"
            onChange={() => {
              secSetIsChecked(!secIsChecked);
              firSetIsChecked(!firIsChecked);
              
            }}
          />
          <div
            className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
              secIsChecked && 'border-primary'
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                secIsChecked && '!bg-primary'
              }`}
            >
              {' '}
            </span>
          </div>
        </div>
        No Notifications
      </label>
    </div>
  );
};

export default CheckboxFour;
