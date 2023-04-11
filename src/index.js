import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HomePage } from './pages/home/HomePage';
import { BlogPage } from './pages/blog/BlogPage';
import HeaderModule from './modules/header/HeaderModule';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <h1>Error Home</h1>
  },
  {
    path: "/about",
    element: <h1>About</h1>,
    errorElement: <h1>Error About</h1>
  },
  {
    path: "/Blog",
    element: BlogPage(),
    errorElement: <h1>Error blog</h1>
  },
  {
    path: "/contact",
    element: <h1>contact</h1>,
    errorElement: <h1>Error contact</h1>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
