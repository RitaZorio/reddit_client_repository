import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, updateScore } from "./posts/postsSlice";
import { selectComments, selectCommentsStatus } from "./comments/commentsSlice";
import { getComments } from "./comments/commentsSlice";
import { Comment } from "./comments/Comment";
import { API_ROOT } from "../Api/reddit";
import { ICONS } from "../Mocks/multimedia";
import '../Styles/posts.css';
import { IsLoading } from "./IsLoading";
import { areLoading } from "../Api/reddit";

//will render a single post and its comments on a new page view
export const CompletePost = () => {

    //make dispatch() available
    const dispatch = useDispatch();

    //retrieve postId from url params
    const { postId } = useParams();

    //retrieve all posts from store
    const posts = useSelector(selectPosts);
    //get correct post based on postId
    const post = posts[postId];
    //get post permalink to dispatch getComments if necessary
    const permalink = post.permalink;

    //will increment / drecrement score based on the social button clicked
    const handleScore = (e) => {
        const value = e.target.value;
        let currentScore = post.score;

        if (value === 'like') {
            currentScore++;
        } else {
            currentScore--;
        }

        //dispatch the action created by updateScore with the new score and post's id so the Store is updated
        dispatch(updateScore({ currentScore, postId }));

    };


    //retrieve comments from store
    const comments = useSelector(selectComments);
    //retrieve isLoading from store (YET TO IMPLEMENT BELOW!!)
    const commentsStatus = useSelector(selectCommentsStatus);


    //will hold comments based on post's id (and ignore AutoModerator comment)
    let commentsByPost = []
    const sortComments = () => {

        Object.values(comments).map(comment => {
            if (comment.link_id === postId && comment.author !== 'AutoModerator') {
                commentsByPost.push(comment);
            }
        });
        return commentsByPost
    };

    //if no comments for this post are in the store, trigger a comment fetch and sort again comments
    if (commentsByPost.length === 0) {
        dispatch(getComments(permalink));
        sortComments();

    }
 

    //if post is not an img will not render <img/>
    const isImg = post.url.includes('.jpg' || '.png');

    return (
        <>
            <div id="complete-post">
                <div key={post.name} className="post-frame">
                    {/*if post's url does not include .jpg or .png will not render <img/>*/}
                    {isImg ? <img src={post.url} className="post-img" id="complete-post-img" /> : <></>}
                    <div className="post-foot">
                        <p>{post.title}</p>
                        {/*Add later link to the user profile */}
                        <Link to={`${API_ROOT}user/${post.author}`} className="user-name link">@{post.author}</Link>
                    </div>
                    <div className="socials-container">
                        <input type="image" src={ICONS.comments.src} className="post-button" aria-label="comments" />
                        {/*this will track likes and dislike numbers */}
                        <p>{post.score}</p>
                        <input type="image" src={ICONS.like.src} className="post-button" aria-label="like" value="like" onClick={handleScore} />
                        <input type="image" src={ICONS.dislike.src} className="post-button" aria-label="dislike" value="dislike" onClick={handleScore} />
                    </div>
                </div>
                <div className="comment-container" id="complete-post-comments">
                    {/* YET TO IMPLEMENT!! if commentsStatus is true, render <IsLoading/>, else render comments */}
                    {commentsByPost.map((comment, index) => <Comment key={index} comment={comment} />)}
                </div>
            </div>
        </>
    )
}