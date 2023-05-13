import React from "react";
import { ICONS } from "../../Mocks/multimedia";
import '../../Styles/sidebar.css';
import { useDispatch } from "react-redux";
import { updateGetPostsTerm } from "../posts/postsSlice";

export const Sidebar = ()=>{
    //make available dispatch()
    const dispatch = useDispatch();

    //will update searchTerm to fetch correct posts
    const handleClick = (e) =>{
        let buttonValue = e.target.value;
        dispatch(updateGetPostsTerm(buttonValue));
    }

    return(
        <div id="sidebar-container">
           <div className="button-container">
                <button aria-label="subreddit" className="right-buttons" value="new" onClick={handleClick}>
                    <img alt="icon" className="icon-button" src={ICONS.activity.src}/>
                    Newest
                </button>
                 <button aria-label="subreddit" className="right-buttons" value="top" onClick={handleClick}>
                    <img alt="icon" className="icon-button" src={ICONS.heart.src}/>
                    Most valued
                </button>
           </div>
           <button id="go-up">
            <a href="#search">Go Up</a>
           </button>
        </div>
    )
}