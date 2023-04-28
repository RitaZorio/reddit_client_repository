import React from "react";
import { ICONS } from "../../Mocks/multimedia";
import '../../Styles/index.css';
import { thumbnails } from "../../Mocks/multimedia";


export const Searchbar = () =>{
    return (
        <div id="search">
              <div className="logos">
              <img src={thumbnails.logo} className="logo"/>
              <p>Reddit Client App</p>
              </div>
                <div>
                <input type="text" placeholder="search"/>
                <button type="submit">
                <img className="icon"src={ICONS.search.src}/>
                </button>
                </div>
        </div>
    )
}