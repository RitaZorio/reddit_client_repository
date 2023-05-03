import React from "react";
import {Community} from './Community';
import  '../../../Styles/navbar.css';
import { selectCommunities } from "./communitiesSlice";
import { useSelector } from "react-redux";


export const Communities = () => {

//const communities = useSelector(selectCommunities);

     return (
        <div className="topics-container">
            <h3 className="nav-title">Communities</h3>
            <Community/>
            <Community/>
            <Community/>
        </div>
    )
}