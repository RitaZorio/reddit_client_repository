import React from "react";
import {thumbnails} from "../../../Mocks/multimedia";
import '../../../Styles/navbar.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateDispatchTrigger, updateGetPostsTerm } from "../../posts/postsSlice";

export const Topic = ({topic}) =>{
 
    //makes dispatch() available
    const dispatch = useDispatch();

    //update getPostsTerm and dispatchTrigger from postSlice
    const handleClick = (e)=>{
        const topic = e.target.value;
        dispatch(updateGetPostsTerm(topic));
    };

    return (
        <div className="mini-container">
            <img className="thumbnail-topic" src={topic.icon_img}/>
            <button onClick={handleClick}className="link" value={topic.url}>{topic.title}</button>
        </div>
    )
}