import React from "react";
import { ICONS, } from "../../Mocks/multimedia";
import '../../Styles/posts.css';
import { postClass } from "./postsSlice";
import { Link } from "react-router-dom";
import { API_ROOT } from "../../Api/reddit";
import { Comments } from "../comments/Comments";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateScore } from "./postsSlice";
import { updateShowComments } from "./postsSlice";
import { getComments } from "../comments/commentsSlice";

export const Post = ({ post }) => {

    //local state to update store state
    const [newScore, setNewScore] = useState(post.score);
    //keep track of which post we need to modify
    const postId = post.name;
    //give access to dispatch fn
    const dispatch = useDispatch();

    //will increment / drecrement score based on the social button clicked
    const handleScore = (e) => {
        const value = e.target.value;
        let currentScore = newScore;

        if (value === 'like') {
            currentScore++;
        } else {
            currentScore--;
        }
        //update local store
        setNewScore(currentScore);
        //dispatch the action created by updateScore with the new score and post's id so the Store is updated
        dispatch(updateScore({ currentScore, postId }));

    };


    const [clikedStatus, setClikedStatus] = useState(false);

    //will toggle clickedStatus on each click
    const handleComments = () => {
        const newClikedStatus = !clikedStatus;
        setClikedStatus(newClikedStatus);
        dispatch(updateShowComments({ clikedStatus: newClikedStatus, postId }));

        //if show_comments is true will dispatch fetch for comments with this post permalink endpoint
        if (newClikedStatus === true) {
            dispatch(getComments(post.permalink));
        }
    }

    const isImg = post.url.includes('.jpg' || '.png');

    return (
        <>
            <div className={postClass(post.title)}>
                <div className="post-frame">
                    <Link to={postId} className="link post-link">
                        {/*if post's url does not include .jpg or .png will not render <img/>*/}
                        {isImg ? <img src={post.url} className="post-img" /> : <></>}
                        <p>{post.title}</p>
                    </Link>
                    <div className="post-foot">
                        {/*Add later link to the user profile */}
                        <Link to={`${API_ROOT}user/${post.author}`} className="user-name link">@{post.author}</Link>
                    </div>

                    <div className="socials-container">
                        <input type="image" src={ICONS.comments.src} className="post-button" aria-label="comments" onClick={handleComments} />
                        {/*this will track likes and dislike numbers */}
                        <p>{newScore}</p>
                        <input type="image" src={ICONS.like.src} className="post-button" aria-label="like" value="like" onClick={handleScore} />
                        <input type="image" src={ICONS.dislike.src} className="post-button" aria-label="dislike" value="dislike" onClick={handleScore} />
                    </div>
                </div>
            </div>
            <Comments permalink={post.permalink} postId={post.name} showComments={post.show_comments} />
        </>
    );
}