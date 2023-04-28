import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';
import {Navbar} from './Features/navbar/Navbar.js';
import { Body } from './Features/body/Body';
import './Styles/index.css';

//Root component will render components that should be visible in all routes
const Root = () =>{
  return (
    <div id="body-container">
    <Navbar/>
    <Body/>
    </div>
  )
};

//Defines and initializes appRouter object
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      {/*Routes for the rest views of the app (eg. posts filtered by term)*/}
      <Route/>
      <Route/>
      <Route/>
    </Route>  
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} >
    <Root/>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
