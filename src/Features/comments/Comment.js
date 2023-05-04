import React from "react";
import '../../Styles/comments.css';
import { Link } from "react-router-dom";
import { API_ROOT } from "../../Api/reddit";

export const Comment = ({comment})=>{
    return(
        <div key={comment.id} className="comment">
            <Link to={`${API_ROOT}user/${comment.author}`} className="user link">
              @{comment.author}
            </Link>
            <p>{comment.body}</p>
        </div>
    )
};