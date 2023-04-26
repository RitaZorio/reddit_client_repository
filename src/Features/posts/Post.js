import React from "react";
import { Outlet } from "react-router-dom";

export const Post = ()=>{
    return(
        <div>
        <div className="post-frame">
            <img className="post-img"/>
               <div className="socials-container">
                <p>Photo description</p>
                <button className="post-comment-button"/>
                <button className="post-like-button"/>
                <button className="post-dislike-button"/>
            </div>
        </div>
        {/*Outlet to show Comment component*/}
        <Outlet/>
        </div>
    )
}