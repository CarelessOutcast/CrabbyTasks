/*************************************************************************
  * File: Task.ts
  *
  * Logic: The Task.ts file defines an interface named Task, which describes the
  * structure of a task object. This interface is used to represent tasks in the
  * application and is related to the backend API's serializer and models.
  *
  * Type: Type
*************************************************************************/

// _Backend/base/api/serializer.py && _Backend/base/models.py
export interface Task {
  task_id: Any; // FIXME
  user_id:  Any; // FIXME
  task: string;
  description:  string;
  status: string;
  created_at: Any; // FIXME
  priority: string;
  notifications: string;
  deadline:  Date; // FIXME
}
