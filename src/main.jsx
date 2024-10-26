
import ReactDOM from 'react-dom'
import React from 'react'
import "./index.css";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Layout from "./Layout.jsx"
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx"
import Project from './components/Project/Project.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{
      path:"",
      element:<Home/>
    },
     {
      path:"about",
      element:<About/>
     },
     {
      path:"projects",
      element:<Project/>
     }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
