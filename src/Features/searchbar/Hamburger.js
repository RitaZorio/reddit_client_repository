import React from "react";
import '../../Styles/searchbar.css';
import { ICONS } from "../../Mocks/multimedia";
import { Communities } from "../navbar/communities/Communities";
import {Topics} from '../navbar/topics/Topics';

export const Hamburger = () =>{
    return (
        <>
        <input type="checkbox" name="" id=""/>
        <div class="hamburger-lines">
               <span class="line line1"></span>
               <span class="line line2"></span>
               <span class="line line3"></span>
        </div>
        <ul class="menu-items">
          <div id="hidden-search">
            <input type="text" placeholder="search"/>
            <button  className="icon" type="submit">
             <img className="icon" id="icon" src={ICONS.search.src}/>
            </button>
          </div>
          <div className="hidden-topics-container">
            <h3 className="nav-title">Communities</h3>
            <li>Community name</li>
            <li>Community name</li>
            <li>Community name</li>
          </div>
          <div className="hidden-topics-container">
            <h3 className="nav-title">Topics</h3>
            <li>Topic name</li>
            <li>Topic name</li>
            <li>Topic name</li>
          </div>
        </ul>
        </>
    );
}