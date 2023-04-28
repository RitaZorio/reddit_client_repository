import React from "react";
import {thumbnails} from "../../../Mocks/multimedia";
import '../../../Styles/index.css';
import { Link } from "react-router-dom";

export const Topic = () =>{
    return (
        <div className="mini-container">
            <img className="thumbnail" src={thumbnails.guinea}/>
            <Link className="link">Topic name</Link>
        </div>
    )
}