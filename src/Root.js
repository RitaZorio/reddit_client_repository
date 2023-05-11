import React from "react";
import {Navbar} from './Features/navbar/Navbar.js';
import { Body } from './Features/body/Body';

//Root component will render all other components
const Root = () =>{
    return (
      <div id="body-container">
      <Navbar/>
      <Body/>
      </div>
    )
  };

  export default Root;