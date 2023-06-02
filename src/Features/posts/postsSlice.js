import { fetchMorePosts, fetchPosts } from "../../Api/reddit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create the slice
const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: {},
    isLoading: false,
    hasError: false,
    //Dinamic argument for getPosts(). SearchForm and navbar components can change it
    getPostsTerm: '/r/popular/',
  },
  //handle dispatched actions
  reducers: {
    //update score when user clicked like or dislike button
    updateScore(state, action) {
      //retrieve new score and post's id
      const { currentScore, postId } = action.payload;
      //update the score of the correct post
      state.posts[postId].score = currentScore;
    },
    updateGetPostsTerm(state, action) {
      state.getPostsTerm = action.payload;
    },
    updateShowComments(state, action) {
      //retrieve new clicked status
      const { clikedStatus, postId } = action.payload;
      //update the show_Comments with this cliked status
      state.posts[postId].show_comments = clikedStatus;

    }
  },
  //handle promise's lifecycle dispatched actions/payload
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      //if post were retrieved,add them to state
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        //clear the post state
        state.posts = {};
        //retrieve post array from payload
        const postsArr = action.payload;
        //for each post in the array
        postsArr.map(post => {
          //extract these variables
          const { author, name, score, title, url, permalink, is_self, is_video } = post.data;
          //add new post the store, indexed by name
          state.posts[name] = {
            author: author,
            name: name,
            score: score,
            title: title,
            url: url,
            permalink: permalink,
            is_self: is_self,
            is_video: is_video,
            show_comments: false
          };
        })
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;

      })
      .addCase(loadMorePosts.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadMorePosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        //retrieve post array from payload
        const postsArr = action.payload;
      //for each post in the array
      const postsToAdd = {};
      postsArr.forEach(post => {
        //extract these variables
        const { author, name, score, title, url, permalink, is_self, is_video } = post.data;
        //add new post the store, indexed by name
        postsToAdd[name] = {
          author: author,
          name: name,
          score: score,
          title: title,
          url: url,
          permalink: permalink,
          is_self: is_self,
          is_video: is_video,
          show_comments: false
        };
      });
      state.posts = {
        ...state.posts,
        ...postsToAdd,
      };
      })
      .addCase(loadMorePosts.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      })
  }
});


//will create actions/payload for each fetch promise lifecycle, that the extrareducers will handle
//thunk action creator for getPosts
export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (arg, { dispatch, getState }) => {
    const payload = await fetchPosts(arg);
    return payload
  }
);

//thunk action creator for loadMorePosts
export const loadMorePosts = createAsyncThunk(
  'posts/loadMorePosts',
  async ({ getPostsArg, lastPostArg }, { dispatch, getState }) => {
    const payload = await fetchMorePosts({ getPostsArg, lastPostArg });
    return payload
  }
);

//export slice reducer
export default postsSlice.reducer;
//create selectors
export const selectPosts = state => state.posts.posts;
export const selectGetPostsTerm = state => state.posts.getPostsTerm;
export const selectPostsStatus = state => state.posts.isLoading;
//export action creators
export const { updateScore, updateDispatchTrigger, updateGetPostsTerm, updateShowComments } = postsSlice.actions;




//will return randomly a class to apply different styles in css to the posts
export const postClass = (title) => {
  const pseudoRandom = title.split('').reduce((sum, letter) => sum + letter.charCodeAt(0), 0) % 4;
  if (pseudoRandom === 0) {
    return 'rotate1';
  } else if (pseudoRandom === 1) {
    return 'rotate2';
  } else if (pseudoRandom === 2) {
    return 'rotate3';
  }
  return 'rotate4';
}

