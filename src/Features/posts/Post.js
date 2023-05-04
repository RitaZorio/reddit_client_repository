import React from "react";
import { Outlet } from "react-router-dom";
import { ICONS,} from "../../Mocks/multimedia";
import '../../Styles/posts.css';
import { postClass } from "./postsSlice";
import { Link } from "react-router-dom";
import { API_ROOT } from "../../Api/reddit";
//Temporarily using Comments. Later comments will be displayed using the Outlet component
import { Comments } from "../comments/Comments";

export const Post = ({post, index})=>{

    return(
            <div className={postClass()}>
                <div key={index} className="post-frame">
                    <img src={post.url} className="post-img"/>
                    <div className="post-foot">
                        <p>{post.title}</p>
                        {/*Add later link to the user profile */}   
                        <Link to={`${API_ROOT}user/${post.author}`} className="user-name link">@{post.author}</Link>   
                    </div>   
                    <div className="socials-container">
                        <input type="image" src={ICONS.comments.src} className="post-button"/>
                        {/*this will track likes and dislike numbers */}
                        <p>{post.score}</p>
                        <input type="image" src={ICONS.like.src} className="post-button"/>
                        <input type="image" src={ICONS.dislike.src} className="post-button"/>
                    </div>
                </div>
                {/* This will be an Outlet that render comments when comment button clicked/> */}
                <Comments permalink={post.permalink}/>
            </div>
    );
}

