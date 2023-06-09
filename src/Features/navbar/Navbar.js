import React from "react";
import {Communities} from './communities/Communities';
import { Topics } from "./topics/Topics";
import '../../Styles/index.css';


export const Navbar = (props)=>{
    const store = props;
    return (
        <nav className="nav-container">
            <Communities state={store}/>
            <Topics state={store}/>
        </nav>
    )
};