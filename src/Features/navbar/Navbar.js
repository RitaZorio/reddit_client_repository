import React from "react";
import {Communities} from './communities/Communities';
import { Topics } from "./topics/Topics";

export const Navbar = ()=>{
    return (
        <div>
            <Communities/>
            <Topics/>
        </div>
    )
};