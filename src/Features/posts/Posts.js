import React, { useEffect } from "react";
import '../../Styles/posts.css';
import  {Post} from './Post';
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, selectGetPostsTerm} from "./postsSlice";
import { getPosts, loadMorePosts } from "./postsSlice";



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
  if(!post.is_video){
    validPosts.push(post)
  }
});

//get the name of last post in store
const lastPostName = postsArr[postsArr.length-1];
//handle "load more" button click
const handleClick = () =>{
  let lastPostArg = lastPostName.name;
  dispatch(loadMorePosts({getPostsArg, lastPostArg}));

};

  return(
    <div id="post-container">
      {validPosts.map( post =>{
        return <Post post={post} />
      })}
      <div>
        <button className="right-buttons" id="load-button"onClick={handleClick}>
           Load more
        </button>
      </div>
    </div>
    )
 }