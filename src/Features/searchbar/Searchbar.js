import React from "react";
import { ICONS } from "../../Mocks/multimedia";
import '../../Styles/searchbar.css';
import { thumbnails } from "../../Mocks/multimedia";
import { Hamburger } from "./Hamburger";
import { SearchInput } from "./SearchInput";



export const Searchbar = () =>{
    return (
        <div id="search">
          <div className="logos">
                <div id="menu">
                    <Hamburger/>
                </div>
                <img src={thumbnails.logo} className="logo"/>
                <p>Reddit Client App</p>
            </div>
            <div className="search">
                <SearchInput />
            </div>
        </div>
    )
}