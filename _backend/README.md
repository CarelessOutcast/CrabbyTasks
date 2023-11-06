# CrabbyTasks - Task Management Web Application

CrabbyTasks is a web application built with Django and Django REST framework for managing tasks. It allows users to create, update, retrieve, and delete tasks, set deadlines, priorities, and more. This README provides an overview of the project's structure, features, and how to set it up and run locally.

## Features

- User authentication using JWT (JSON Web Tokens).
- Create, Read, Update, and Delete (CRUD) operations for tasks.
- Filter tasks based on status, priority, and other criteria.
- Task categorization and notification settings.
- Customized token authentication for user login.
- Admin panel for task management.

## Project Structure

The project consists of two Django apps: `base` and `users`.

- `base`: Manages tasks and their CRUD operations.
- `users`: Manages user authentication and user model customization.

### File Structure

- `config`: Contains project configuration settings.
- `users`: Handles user authentication and custom user model.
- `base`: Manages tasks and API endpoints.
- `requirements.txt`: Lists project dependencies.
- `.env`: Stores environment variables.
- `manage.py`: Django command-line utility.
- `README.md`: Project documentation.

## Setting Up Locally

To run CrabbyTasks locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/crabbytasks.git
   cd crabbytasks
   ```

2. Create a virtual environment:

   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:

   - On Windows:

     ```bash
     venv\Scripts\activate
     ```

   - On macOS and Linux:

     ```bash
     source venv/bin/activate
     ```

4. Install project dependencies:

   ```bash
   pip install -r requirements.txt
   ```

5. Create a `.env` file in the project root and set the following environment variables:

   ```
   DJANGO_SECRET_KEY=your_secret_key
   DEBUG=1
   DB_ENGINE=django.db.backends.sqlite3
   DB_DEVELOPER_NAME=your_database_name
   DB_DEVELOPER_USER=your_database_user
   DB_DEVELOPER_PASSWORD=your_database_password
   DB_DEVELOPER_HOST=127.0.0.1
   DB_DEVELOPER_PORT=5432
   ```

   Replace `your_secret_key`, `your_database_name`, `your_database_user`, and `your_database_password` with your preferred values.

6. Apply database migrations:

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

7. Create a superuser (admin) account:

   ```bash
   python manage.py createsuperuser
   ```

   Follow the prompts to set a username, email, and password for the admin account.

8. Start the development server:

   ```bash
   python manage.py runserver
   ```

   The application will be accessible at `http://localhost:8000`.

9. Access the admin panel:

   Open a web browser and navigate to `http://localhost:8000/admin/`. Log in with the superuser account created earlier to access the admin panel.

10. Use the API:

    You can interact with the API by making HTTP requests to the provided endpoints (e.g., `http://localhost:8000/api/user/` for user-related endpoints and `http://localhost:8000/api/` for task-related endpoints).

## API Endpoints

### User Authentication

- `POST /api/user/token/`: Obtain an access token by providing valid credentials.
- `POST /api/user/token/refresh/`: Refresh an expired access token.

### Task Management

- `GET /api/`: Retrieve all tasks.
- `POST /api/create/`: Create a new task.
- `GET /api/retrieve/<str:task_id>/`: Retrieve a single task by its ID.
- `PUT /api/update/<str:pk>/`: Update a task by its ID.
- `PATCH /api/update/<str:pk>/`: Partially update a task by its ID.
- `DELETE /api/delete/<str:pk>/`: Delete a task by its ID.

### Task Filtering

- `GET /api/search/?status=<status>&task=<task>&description=<description>&created_at=<created_at>&priority=<priority>&notifications=<notifications>&deadline=<deadline>/`: Filter tasks based on various criteria, including status, task name, description, created date, priority, notifications, and deadline.

## Customization and Further Development

You can customize and extend the CrabbyTasks project by adding new features, views, and API endpoints to meet your specific requirements. Additionally, you can implement frontend components to create a user-friendly task management interface.

## Contributors

- [Carlos Tapia](https://github.com/CarelessOutcast)

If you would like to contribute to this project, please feel free to fork the repository, make changes, and submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
