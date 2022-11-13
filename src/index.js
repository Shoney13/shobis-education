import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Courses from './component/Courses';
import NavBar from './component/NavBar';
import LandingPage from './component/LandingPage';
import Course from './component/Course';
import About from './component/About';

const router = createBrowserRouter([
  {
    path: "/about",
    element: <><NavBar /><About /></>,
  },
  {
    path: "courses/:course/:subject",
    element: <><NavBar /><Course /></>,
  },
  {
    path: "/courses/:course",
    element: <><NavBar /><Course /></>,
  },
  {
    path: "/courses",
    element: <><NavBar /><Courses /></>,
  },
  {
    path: "/",
    element: <><NavBar /><LandingPage /></>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
