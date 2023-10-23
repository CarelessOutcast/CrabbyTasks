import { useEffect, useRef, useState } from 'react';


const TaskSmall = () => {

  return (
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
  );
};

export default TaskSmall;
