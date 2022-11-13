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

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "courses",
    element: <Courses />,
  },
  {
    path: "course/:course",
    element: <Course />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
