import React from "react";
import '../../Styles/posts.css';
import  {Post} from './Post';
import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";


//Right now this component is return mock posts. Probably will return posts with the info from the API received through PostSlice
export const Posts = ()=>{

//select all post from state
const posts = useSelector(selectPosts);
//create an array of posts obj
const postsArr = Object.values(posts);

//create an array of post with valid img data
let validPosts = [];
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