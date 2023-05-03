import React from "react";
import {thumbnails} from "../../../Mocks/multimedia";
import '../../../Styles/navbar.css';
import { Link } from "react-router-dom";
import { API_ROOT } from "../../../Api/reddit";
import { useSelector } from "react-redux";
import { selectTopics } from "./topicsSlice";

export const Topic = () =>{
 //   const topics = useSelector(selectTopics);
 
    return (
        <div className="mini-container">
            <img className="thumbnail" src={thumbnails.guinea}/>
            <Link className="link">Topic name</Link>
        </div>
    )
}