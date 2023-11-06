/*************************************************************************
 * File: main.tsx
 *
 * Logic: This file serves as the main entry point for your React application.
 * It initializes the React application, sets up client-side routing with React
 * Router, provides authentication context with AuthProvider, and renders the
 * root component (App) into the HTML element with the 'root' ID. It also
 * includes the use of React.StrictMode for development debugging and imports
 * necessary CSS files for styling.
 *
 * Type: TypeScript/React Application Entry Point
 *************************************************************************/


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import App from './App';
import './index.css';
import './satoshi.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
