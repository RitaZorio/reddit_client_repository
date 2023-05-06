import React from "react";
import {thumbnails} from "../../../Mocks/multimedia";
import '../../../Styles/navbar.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateDispatchTrigger, updateGetPostsTerm } from "../../posts/postsSlice";

export const Topic = ({topic}) =>{
 
    //makes dispatch() available
    const dispatch = useDispatch();
    //get the subreddit url from topic object
    const subreddit = topic.url;

    //update getPostsTerm and dispatchTrigger from postSlice
    const handleClick = ()=>{
        dispatch(updateGetPostsTerm(subreddit));
        dispatch(updateDispatchTrigger());
    };

    return (
        <div className="mini-container">
            <img className="thumbnail-topic" src={topic.icon_img}/>
            <Link onClick={handleClick}className="link">{topic.title}</Link>
        </div>
    )
}