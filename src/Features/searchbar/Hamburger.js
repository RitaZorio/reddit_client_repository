import React from "react";
import '../../Styles/searchbar.css';
import { ICONS } from "../../Mocks/multimedia";
import { Communities } from "../navbar/communities/Communities";
import {Topics} from '../navbar/topics/Topics';
import { SearchForm } from "./SearchForm";

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