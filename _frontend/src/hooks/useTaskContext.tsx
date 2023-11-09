
/*************************************************************************
 * File: useTaskContext.tsx
 *
 * Logic: Provides access to the TaskContext using useContext.
 *
 * Type: Custom React Hook
*************************************************************************/

import TaskContext from '../context/TaskContext';
import { useContext } from 'react';

export default function useTaskContext() {
  return useContext(TaskContext);
}

