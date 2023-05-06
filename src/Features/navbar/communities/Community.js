import React from "react";
import {thumbnails } from "../../../Mocks/multimedia";
import '../../../Styles/navbar.css';
import { Link } from "react-router-dom";
import { updateGetPostsTerm, updateDispatchTrigger } from "../../posts/postsSlice";
import {useDispatch } from "react-redux";

//Right now this component use mock imgs. Will render img and community name from reddits API received by Communities
export const Community = ({comm}) =>{

    //makes dispatch() available
    const dispatch = useDispatch();
    //get the subreddit url from comm object
    const subreddit = comm.url;

    //update getPostsTerm and dispatchTrigger from postSlice
    const handleClick = ()=>{
        dispatch(updateGetPostsTerm(subreddit));
        dispatch(updateDispatchTrigger());
    }

     return (
        <div className="mini-container">
            <img className="thumbnail" src={comm.icon_img}/>
            <Link onClick={handleClick} className="link">{comm.title}</Link>
        </div>
    )
};