import React from "react";
import { Post } from "../posts/Post";
import { Sidebar } from "../sidebar/Sidebar";
import { Searchbar } from "../searchbar/Searchbar";
import { Slider } from "../sliders/Sliders";

export const Body = () => {
    return (
        <div>
            <Searchbar/>
            <Slider/>
            {/*Probably will use a .map() to create posts and pass props*/}
            <Post/>
            <Post/>
            <Sidebar/>
        </div>
    )
};
