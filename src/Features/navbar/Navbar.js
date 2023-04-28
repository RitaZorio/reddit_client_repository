import React from "react";
import {Communities} from './communities/Communities';
import { Topics } from "./topics/Topics";
import '../../Styles/index.css';

export const Navbar = ()=>{
    return (
        <nav className="nav-container">
            <Communities/>
            <Topics/>
        </nav>
    )
};