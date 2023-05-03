import React from "react";
import {thumbnails } from "../../../Mocks/multimedia";
import '../../../Styles/navbar.css';
import { Link } from "react-router-dom";

//Right now this component use mock imgs. Will render img an community name from reddits API received by Communities
export const Community = () =>{
    return (
        <div className="mini-container">
            <img className="thumbnail" src={thumbnails.guinea}/>
            <Link className="link">Community name</Link>
        </div>
    )
};