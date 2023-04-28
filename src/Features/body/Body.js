import React from "react";
import { Posts } from "../posts/Posts";
import { Sidebar } from "../sidebar/Sidebar";
import { Searchbar } from "../searchbar/Searchbar";
import { Slider } from "../sliders/Sliders";
import '../../Styles/index.css';

export const Body = () => {
    return (
        <>
            <Searchbar/>
            <Slider/>
            <Posts/>
            <Sidebar/>
        </>
    )
};
