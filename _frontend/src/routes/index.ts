/*************************************************************************
 * File: routes/index.ts
 *
 * Logic: This file defines the routes for various pages in the application
 * using React lazy loading.
 *
 * Type: Configuration
*************************************************************************/



import { lazy } from 'react';

const TaskManager = lazy(() => import('../pages/TaskManager'));
const Pet = lazy(() => import('../pages/Pet'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const LandingPage = lazy(() => import('../pages/LandingPage'));
const Home = lazy(() => import('../pages/Dashboard/Home'));

const coreRoutes = [
  {
    path: '/taskManager',
    title: 'Task Manager',
    component: TaskManager,
  },
  {
    path: '/home',
    title: 'Home',
    component: Home,
  },
  {
    path: '/pet',
    title: 'Pet',
    component: Pet,
  },
  {
    path: '/landingpage',
    title: 'Landing Page',
    component: LandingPage,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
];

const routes = [...coreRoutes];
export default routes;
