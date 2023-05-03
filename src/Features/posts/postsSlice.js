import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts } from "../../Api/reddit";

//create the slice
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {},
        isLoading: false,
        hasError: false
    },
    //handle dispatched actions
    reducers: {
        //    //add comment id to commentsIds array in posts
        //   addCommentId: (state, action) =>{
        //   const {link_id, id } = action.payload;
        //   //post's name and comment's link_id is the same string
        //   state.posts[link_id].CommentsIds.push(id);
        //  }
      },
      //handle promise's lifecycle dispatched actions/payload
      extraReducers: (builder) =>{
        builder
                .addCase(getPosts.pending, (state, action) =>{
                  state.isLoading = true;
                  state.hasError = false;
                })
                //if post were retrieved,add them to state
                .addCase(getPosts.fulfilled, (state, action) =>{
                  state.isLoading = false;
                  state.hasError = false;
                  const {author, name, score, title, url, permalink} = action.payload;
                  //add new post to posts obj, indexed by name if promise was successfull
                  state.posts[name] = {
                      author: author,
                      name: name,
                      score: score,
                      title: title,
                      url: url,
                      permalink: permalink
                    };
                  })
                .addCase(getPosts.rejected, (state, action) =>{
                  state.isLoading = false;
                  state.hasError = true;
                })
              }
      });


//will create actions/payload for each fetch promise lifecycle, that the extrareducers will handle
const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (arg, {dispatch, getState}) =>{
    const payload = await fetchPosts(arg);
    return payload
  });



export default postsSlice.reducer;
//create selector for Posts
export const selectPosts = state => state.posts.posts;
//create the export for the action creators
export const addPost = postsSlice.actions.addPost;
export const addCommentId = postsSlice.actions.addCommentId;


//will return randomly a class to apply different styles in css to the posts
export const postClass = ()=>{
    let random = Math.floor(Math.random() * 3);
    let rotate
    if(random === 0){
            rotate = 'rotate1';
        }else if (random === 1){
            rotate = 'rotate2';
        } else if (random === 2){
            rotate = 'rotate3';
        }else{
            rotate = 'rotate4';
       }
        return rotate
};

