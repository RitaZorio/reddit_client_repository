import React from "react";
import { Comment } from "./Comment";
import '../../Styles/comments.css';
import { useSelector } from 'react-redux';
import { selectComments } from "./commentsSlice";


//will render in Post Outlet component if user clicks comments button
export const Comments = ({showComments})=>{

    const show = showComments;

    const comments = useSelector(selectComments);
    const commentsArr = Object.values(comments);

//will show/hide comments when comment button is clicked
if(show){
    return(
        <div className="comment-container">
            {commentsArr.map( comment =>
            <Comment comment={comment}/>)}
        </div>
    );
}else{
    return(
        <>
        </>
    );
}
    
};