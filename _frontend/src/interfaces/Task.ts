
// Pulled info from:
// _Backend/base/api/serializer.py && _Backend/base/models.py
export interface Task {
  task_id: Any; // I don't what type this is 
  user_id:  Any;
  task: string;
  description:  string;
  status: string;
  created_at: Any; // Datetime type??
  priority: string;
  notifications: string;
  deadline:  Date; // Datetime type??
}
