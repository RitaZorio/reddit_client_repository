import React from "react";
import { Posts } from "../posts/Posts";
import { Sidebar } from "../sidebar/Sidebar";
import { Searchbar } from "../searchbar/Searchbar";
import { Slider } from "../sliders/Sliders";
import '../../Styles/index.css';
import { Outlet } from "react-router-dom";


export const Body = () => {
    return (
        <>
            <Searchbar/>
            <Slider/>
            <Outlet/>
            <Posts/>
            <Sidebar/>
        </>
    )
};
