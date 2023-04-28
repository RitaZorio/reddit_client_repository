import React from "react";
import { ICONS } from "../../Mocks/multimedia";
import '../../Styles/index.css';

export const Sidebar = ()=>{
    return(
        <div id="sidebar-container">
           <div className="button-container">
                <button className="right-buttons">
                    <img className="icon-button" src={ICONS.activity.src}/>
                    Newest
                </button>
                 <button className="right-buttons">
                    <img className="icon-button" src={ICONS.heart.src}/>
                    Most valued
                </button>
           </div>
           <button id="go-up">
            Go up
           </button>
        </div>
    )
}