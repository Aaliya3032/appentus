import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes} from './Routes';
import './index.css';
import Layout from './Layout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
          {Routes.map((route)=>
            <Route path={route.path} element={route.element} />
          )}
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

