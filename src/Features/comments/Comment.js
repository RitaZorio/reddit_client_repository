import React from "react";
import '../../Styles/comments.css';
import { Link } from "react-router-dom";


export const Comment = ()=>{
    return(
        <div className="comment">
          {/*Add later link to the user profile */} 
            <Link className="user link">@Username</Link>
            <p>Comment content displayed here</p>
        </div>
    )
};