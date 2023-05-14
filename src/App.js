import React from "react";
import { RouterProvider, createBrowserRouter,createRoutesFromElements, Route } from "react-router-dom";
import Root from "./Root";
import { Posts } from "./Features/posts/Posts";


//Defines and initializes appRouter object
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route path=":postId" element={<Posts/>}/>
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