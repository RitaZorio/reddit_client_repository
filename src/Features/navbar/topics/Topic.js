import React from "react";
import '../../../Styles/navbar.css';
import { useDispatch } from "react-redux";
import { updateGetPostsTerm } from "../../posts/postsSlice";

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