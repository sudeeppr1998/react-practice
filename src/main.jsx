import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import ApiCall from './apiCall.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Link to={`practice`}>Your Name</Link></div>,
  },
  {
    path: "practice",
    element: <App />,
  },
  {
    path: "api",
    element: <ApiCall />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)
