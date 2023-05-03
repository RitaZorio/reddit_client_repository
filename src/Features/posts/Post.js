import React from "react";
import { Outlet } from "react-router-dom";
import { ICONS, IMG } from "../../Mocks/multimedia";
import '../../Styles/posts.css';
import '../../Styles/posts.css';
import { postClass } from "./postsSlice";
import { Link } from "react-router-dom";
//Temporarily using Comments. Later comments will be displayed using the Outlet component
import { Comments } from "../comments/Comments";

export const Post = ()=>{
    return(
        <>
        {/*Maps the IMG object and return a post for each key */}
        {Object.values(IMG).map((img, index) =>{
            return(
                   <div className={postClass()}>
                        <div key={index} className="post-frame">
                            <img src={img.src} className="post-img"/>
                            <div className="post-foot">
                                <p>{img.title}</p>
                                {/*Add later link to the user profile */}   
                                <Link className="user-name link">@UserName</Link>   
                            </div>   
                            <div className="socials-container">
                                <input type="image" src={ICONS.comments.src} className="post-button"/>
                                {/*this will track likes and dislike numbers */}
                                <p>15K</p>
                                <input type="image" src={ICONS.like.src} className="post-button"/>
                                <input type="image" src={ICONS.dislike.src} className="post-button"/>
                            </div>
                        </div>
                        {/* This will be an Outlet that render comments when comment button clicked/> */}
                        <Comments/>
                    </div>
                )
            })} 
        </>              
    );
}

