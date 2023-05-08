import React from "react";
import { Outlet } from "react-router-dom";
import { ICONS,} from "../../Mocks/multimedia";
import '../../Styles/posts.css';
import { postClass } from "./postsSlice";
import { Link } from "react-router-dom";
import { API_ROOT } from "../../Api/reddit";
//Temporarily using Comments. Later comments will be displayed using the Outlet component
import { Comments } from "../comments/Comments";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateScore } from "./postsSlice";
import { updateShowComments } from "./postsSlice";
import { getComments } from "../comments/commentsSlice";

export const Post = ({post, index})=>{

    //local state to update store state
    const [newScore, setNewScore] = useState(post.score);
    //keep track of which post we need to modify
    const postId = post.name;
    //give access to dispatch fn
    const dispatch = useDispatch();

    //will increment / drecrement score based on the social button clicked
    const handleScore = (e) =>{
       const value = e.target.value;
       let currentScore = newScore;

       if(value === 'like'){
        currentScore++;
        } else{
        currentScore--;
        }
        //update local store
        setNewScore (currentScore);
        //dispatch the action created by updateScore with the new score and post's id so the Store is updated
       dispatch(updateScore({currentScore, postId}));
       
    };


    const [ clikedStatus, setClikedStatus] = useState(true);

    //will toggle clickedStatus on each click
    const handleComments = ()=>{
        setClikedStatus(!clikedStatus);
        dispatch(updateShowComments({clikedStatus, postId}));

        //if show_comments is true will dispatch fetch for comments with this post permalink endpoint
        if(clikedStatus === true){
         dispatch(getComments(post.permalink));
     }
    }

    return(
        <>
            <div className={postClass()}>
                <div key={index} className="post-frame">
                    <img src={post.url} className="post-img"/>
                    <div className="post-foot">
                        <p>{post.title}</p>
                        {/*Add later link to the user profile */}   
                        <Link to={`${API_ROOT}user/${post.author}`} className="user-name link">@{post.author}</Link>   
                    </div>   
                    <div className="socials-container">
                        <input type="image" src={ICONS.comments.src} className="post-button" onClick={handleComments}/>
                        {/*this will track likes and dislike numbers */}
                        <p>{newScore}</p>
                        <input type="image" src={ICONS.like.src} className="post-button" value="like" onClick={handleScore}/>
                        <input type="image" src={ICONS.dislike.src} className="post-button" value="dislike" onClick={handleScore}/>
                    </div>
                </div>
            </div>
              {/* This will be an Outlet that render comments when comment button clicked/> */}
              <Comments permalink={post.permalink} postId={post.name} showComments={post.show_comments}/>
              </>
    );
}