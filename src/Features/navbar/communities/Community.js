import React from "react";
import {thumbnails } from "../../../Mocks/multimedia";
import '../../../Styles/navbar.css';
import { Link } from "react-router-dom";

//Right now this component use mock imgs. Will render img and community name from reddits API received by Communities
export const Community = ({comm}) =>{
     return (
        <div className="mini-container">
            <img className="thumbnail" src={comm.icon_img}/>
            <Link to={comm.url} className="link">{comm.title}</Link>
        </div>
    )
};