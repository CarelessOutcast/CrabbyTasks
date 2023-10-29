import TaskContext from '../context/TaskContext';
import { useContext } from 'react';

export default function useTaskContext() {
  return useContext(TaskContext);
}

