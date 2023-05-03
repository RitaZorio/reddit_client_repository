import React from "react";
import { Comment } from "./Comment";
import '../../Styles/comments.css';

//will render in Post Outlet component if user clicks comments button
export const Comments = ()=>{
    return(
        <div className="comment-container">
            {/*Probably will use .map to render Comment and pass down props*/}
            <Comment/>
            <Comment/>
        </div>
    )
};