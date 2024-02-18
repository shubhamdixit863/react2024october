import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Todo from './components/Todo/Todo';
import Edit from './components/Todo/Edit';
import Gallery from './components/Gallery';
import ConditionRendering from './components/ConditionRendering';
import ClassBased from './components/Lifecycle/ClassBased';
import ClassComp from './components/Lifecycle/ClassComp';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
   
  },
  {
    path: "/gallery/:id",
    element:  <Gallery />,
   
  },

  {
    path: "/class",
    element:  <ClassComp/>,
   
  },
  {
    path: "/conditional",
    element:  <ConditionRendering/>,
   
  },
  {
    path: "/todo/edit/:todoId",
    element:  <Edit />,
  },
  
  {
    path: "",
    children:[
      {
        path: "todo",
        element:  <Todo />,
      },

     

    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// age >25 ---.Legal for Driving Colored as green
// age <25 ---Marked as red 

// Age -->Driving Age 