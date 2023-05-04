import React from "react";
import {thumbnails} from "../../../Mocks/multimedia";
import '../../../Styles/navbar.css';
import { Link } from "react-router-dom";
import { API_ROOT } from "../../../Api/reddit";

export const Topic = ({topic}) =>{

    return (
        <div className="mini-container">
            <img className="thumbnail-topic" src={topic.icon_img}/>
            <Link to={topic.url}className="link">{topic.title}</Link>
        </div>
    )
}