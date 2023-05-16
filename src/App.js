import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "./Root";
import { ErrorPage } from "./Features/ErrorPage";
import { CompletePost } from "./Features/CompletePost";




//Defines and initializes appRouter object
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route path=":postId" element={<CompletePost/>} />
    </Route>
  )
);


//The Component 
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;