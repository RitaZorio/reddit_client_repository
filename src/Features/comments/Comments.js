import React from "react";
import { Comment } from "./Comment";
import '../../Styles/comments.css';
import { useSelector } from 'react-redux';
import { selectComments } from "./commentsSlice";
import { IsLoading } from "../IsLoading";
import { selectCommentsStatus } from "./commentsSlice";

//will render in Post Outlet component if user clicks comments button
export const Comments = ({ showComments, postId }) => {

    //select all comments from store
    const comments = useSelector(selectComments);
    //make the obj of objs into an array of objs
    const commentsArr = Object.values(comments);

    //will hold comments based on post's id (and ignore AutoModerator comment)
    let commentsByPost = [];
    commentsArr.map(comment => {
        if (comment.link_id === postId && comment.author !== 'AutoModerator') {
            commentsByPost.push(comment);
        }
    });

    //select loading status from comment store
    const commentsLoadStatus = useSelector(selectCommentsStatus);


    //will show/hide comments when comment button is clicked
    return (
        <div className="comment-container">
            {commentsLoadStatus && showComments
            ? <IsLoading />
            : commentsByPost.map((comment, index) => showComments
                ? <Comment key={index} comment={comment} />
                : <></>
            )}
        </div>
    )
};