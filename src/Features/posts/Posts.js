import React, { useEffect } from "react";
import '../../Styles/posts.css';
import { Post } from './Post';
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, selectGetPostsTerm, selectPostsStatus } from "./postsSlice";
import { getPosts, loadMorePosts } from "./postsSlice";
import { IsLoading } from "../IsLoading";
import { useParams } from "react-router-dom";

//Right now this component is return mock posts. Probably will return posts with the info from the API received through PostSlice
export const Posts = () => {

  //make dispatch available
  const dispatch = useDispatch();

  //retrieve isLoading from Posts store
  const postsLoadStatus = useSelector(selectPostsStatus);

  //retrieve searchTerm from the PostsSlice in store
  const getPostsArg = useSelector(selectGetPostsTerm);

  //Triggers getPosts() each time dispatchTriggerState (from store) changes  
  useEffect(() => {
    dispatch(getPosts(getPostsArg));
  }, [getPostsArg]);

  //select all post from state
  const posts = useSelector(selectPosts);
  //create an array of posts obj
  const postsArr = Object.values(posts);

  //create an array of post with valid img data
  let validPosts = [];
  //will run evertime posts change
  postsArr.map(post => {
    if (!post.is_video) {
      validPosts.push(post)
    }
  });

  //get the name of last post in store
  const lastPostName = postsArr[postsArr.length - 1];

  //retrieve relative path obj
  const { postId } = useParams();
  //check if there is a relative path
  const checkPostId = () =>{
    if(postId !== undefined){
      return true
    }
  }
  //style object: if checkPostId is true, hide Posts
  const style =  checkPostId() ? {
    display: 'none'
  } : {};

  //handle "load more" button click
  const handleClick = () => {
    let lastPostArg = lastPostName.name;
    dispatch(loadMorePosts({ getPostsArg, lastPostArg }));

  };

  return (
    //this style will hide posts if there is a relative path to a single post
    <div style={style} id="post-container">
      {/*If postsLoadStatus is true, show Loading component. If not, show posts */}
      {postsLoadStatus ? <IsLoading /> : validPosts.map(post => {
        return <Post key={post.name} post={post} />
      })}
      <div>
        {/*If postsLoadStatus if false, show "Load more" button */}
        {!postsLoadStatus ? <button className="right-buttons" id="load-button" onClick={handleClick}>
          Load more
        </button> : <></>}
      </div>
    </div>
  )
}