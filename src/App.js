import React from "react";
import { RouterProvider, createBrowserRouter,createRoutesFromElements, Route } from "react-router-dom";
import Root from "./Root";

//Defines and initializes appRouter object
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
      </Route>  
    )
  );


const App = ()=>{
    return(
        <>
        <RouterProvider router={router}/>
        </>
    )
}

export default App;