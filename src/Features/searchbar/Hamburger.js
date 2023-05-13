import React from "react";
import '../../Styles/searchbar.css';
import { Communities } from "../navbar/communities/Communities";
import {Topics} from '../navbar/topics/Topics';
import { SearchForm } from "./SearchForm";

export const Hamburger = () =>{
    return (
        <>
        <input type="checkbox" name="" id=""/>
        <div className="hamburger-lines">
               <span className="line line1"></span>
               <span className="line line2"></span>
               <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <div id="hidden-search">
            <SearchForm/>
          </div>
          <div className="hidden-topics-container">
            <Communities/>
          </div>
          <div className="hidden-topics-container">
            <Topics/>
          </div>
        </ul>
        </>
    );
}