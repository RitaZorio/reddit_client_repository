import React from "react";
import '../../../Styles/navbar.css';
import { updateGetPostsTerm} from "../../posts/postsSlice";
import {useDispatch } from "react-redux";

//Right now this component use mock imgs. Will render img and community name from reddits API received by Communities
export const Community = ({comm}) =>{

    //makes dispatch() available
    const dispatch = useDispatch();
    //get the subreddit url from comm object
   

    //update getPostsTerm and dispatchTrigger from postSlice
    const handleClick = (e)=>{
        const subreddit = e.target.value;
        dispatch(updateGetPostsTerm(subreddit));
    }

     return (
        <div className="mini-container">
            <img className="thumbnail" src={comm.icon_img}/>
            <button onClick={handleClick} className="link" value={comm.url}>{comm.title}</button>
        </div>
    )
};