import React, { useEffect } from "react";
import '../../Styles/posts.css';
import  {Post} from './Post';
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, selectDispatchTrigger, selectGetPostsTerm} from "./postsSlice";
import { getPosts } from "./postsSlice";



//Right now this component is return mock posts. Probably will return posts with the info from the API received through PostSlice
export const Posts = ()=>{

  //make dispatch available
  const dispatch = useDispatch();

  //retrieve searchTerm from the PostsSlice in store
  const getPostsArg = useSelector(selectGetPostsTerm);

//Triggers getPosts() each time dispatchTriggerState (from store) changes  
useEffect(()=>{
 dispatch(getPosts(getPostsArg));
}, [getPostsArg]);

//select all post from state
const posts = useSelector(selectPosts);
//create an array of posts obj
const postsArr = Object.values(posts);

//create an array of post with valid img data
let validPosts = [];
//will run evertime posts change
postsArr.map( post =>{
  if(!post.is_video && !post.is_self){
    validPosts.push(post)
  }
});

  return(
    <div id="post-container">
        {validPosts.map((post, index) =>{
          return <Post post={post} index={index}/>
        })}
    </div>
    )
 }