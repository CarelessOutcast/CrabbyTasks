# Project Overview

This README.md file provides an overview and explanation of the project's codebase, structure, and key components. The project is a React Frontend task management system with routing, user authentication, and various components. Below, we'll break down the project into its main components and provide descriptions for each file and folder.

## Project Structure

The project's codebase is structured as follows:

```
/src
  ├── components
  │   ├── CardOne.tsx
  │   ├── TaskModal.tsx
  │   ├── TaskChart.tsx
  │   ├── TaskLarge.tsx
  │   ├── ...
  ├── context
  │   ├── AuthContext.tsx
  │   ├── TaskContext.tsx
  │   ├── ...
  ├── hooks
  │   ├── useAxios.ts
  │   ├── useTaskContext.ts
  │   ├── ...
  ├── images
  │   ├── ...
  ├── interfaces
  │   ├── Task.ts
  ├── layout
  │   ├── DefaultLayout.tsx
  ├── pages
  │   ├── Authentication
  │   │   ├── SignIn.tsx
  │   │   ├── SignUp.tsx
  │   ├── Dashboard
  │   │   ├── Home.tsx
  │   ├── LandingPage.tsx
  │   ├── Pet.tsx
  │   ├── Profile.tsx
  │   ├── Settings.tsx
  │   ├── TaskManager.tsx
  ├── routes
  │   ├── index.ts
  ├── axios.ts
  ├── index.css
  ├── lib.d.ts
  ├── main.tsx
  ├── react-app-env.d.ts
  ├── satoshi.css
```

## File Descriptions

Let's go through each significant file and folder in the project:

### `components`

- **CardOne.tsx**: This component showcases the users tasks on the homepage.
  
- **TaskModal.tsx**: This component is used to update users tasks. A functional requiremnet for the application.
  
- **TaskChart.tsx**: This components showcases every task, and allows for delete and update functions of the task.
  
- **TaskLarge.tsx**: This component allows for users to add tasks. A functional requirement for the application.


### `context`

- **AuthContext.tsx**: This context provides authentication-related state and functions, used for user authentication throughout the app.

- **TaskContext.tsx**: This context provides task-related state and functions, used for task objects throughout the app.

### `hooks`

- **useAxios.ts**: Custom hook for making HTTP requests using Axios.

- **useTaskContext.ts**: Custom hook for accessing task-related context data.

### `images`

This folder contains image assets used in the application.

### `interfaces`

- **Task.ts**: Defines an interface for a Task object. Used for typescript.

### `layout`

- **DefaultLayout.tsx**: This component represents the default layout of the application which includes common elements like navigation bars or footers.

### `pages`

This folder contains different pages or views of the application.

- **Authentication**: Contains pages for user authentication (SignIn.tsx and SignUp.tsx).

- **Dashboard**: Contains the main dashboard page (Home.tsx).

- **LandingPage.tsx**: The landing page of the application, the entry point for visitors.

- **Pet.tsx**: A page related to "Pet" management; **the functionality has not yet been implemented**.

- **Profile.tsx**: A page for user profiles.

- **Settings.tsx**: A page for user settings.

- **TaskManager.tsx**: The main page for task management, including a calendar view and task lists.

### `routes`

- **index.ts**: Defines routes for various pages and components within the application.

### `axios.ts`

This file configures an Axios instance for making HTTP requests. It sets the base URL for API requests depending on the environment (development or production).

### `index.css` and `satoshi.css`

These CSS files define styles used throughout the application. They include custom styles as well as styles for third-party libraries.

### `lib.d.ts`

A TypeScript declaration file that allows importing image files (PNG, SVG, JPEG, JPG) without type errors.

### `main.tsx`

The main entry point of the React application. It sets up the ReactDOM rendering and includes routing and authentication providers.

### `react-app-env.d.ts`

A TypeScript declaration file for handling various image file types (PNG, SVG, JPEG, JPG) in the React application.

## Project Functionality

This project is a web application built with React for managing tasks and includes user authentication. The app has various pages, including a landing page, task management, user profile, settings, and pet management (though the exact functionality of this part is unclear). Users can sign in and sign up, and there's a dashboard for managing tasks, with a calendar view and task lists.

## Installation and Usage

To set up and run the project, follow these general steps:

1. Clone the repository to your local machine.
2. Make sure you have Node.js and npm (Node Package Manager) installed.
3. Navigate to the project's root directory.
4. Run `npm install` to install project dependencies.
5. Run `npm start` to start the development server.
6. Open your web browser and access the application at the specified URL.


## Conclusion

This README provides an overview of the project structure, file descriptions, and general functionality. To fully understand and use the project, you may need to explore the codebase further and refer to any additional documentation or instructions provided by the Red-Lobsters.
