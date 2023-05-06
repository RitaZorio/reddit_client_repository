import { fetchPosts } from "../../Api/reddit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create the slice
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {
          '06':{
            url: 'https://i.ibb.co/mcxxMDT/pexels-anna-shvets-4588065.jpg',
            title: 'This post is not valid',
            name: '06',
            score: '12345',
            author: 'Second actor Bob',
            permalink: 'url',
            is_self: true,
            is_video: false
          },
          '07':{
            url: 'https://i.ibb.co/mcxxMDT/pexels-anna-shvets-4588065.jpg',
            title: 'This post is not valid',
            name: '07',
            score: '12345',
            author: 'Grumpy cat',
            permalink: 'url',
            is_self: false,
            is_video: true
          },
          '01': {
            url: 'https://i.ibb.co/mcxxMDT/pexels-anna-shvets-4588065.jpg',
            title: 'Rabbits are Trendy',
            name:'01',
            score:'123',
            author:'deipnofobica',
            permalink: 'url',
            is_self: false,
            is_video:false
        },
        '02': {
            url: 'https://i.ibb.co/w72SMHN/pexels-markus-spiske-3970330.jpg',
            title: 'Stock martket sky-rocketing',
            name:'02',
            score:'34',
            author:'Alpo',
            permalink: 'url',
            is_self: false,
            is_video:false
        },
        '03': {
            url: 'https://i.ibb.co/y6x6syN/pexels-pixabay-163036.jpg',
            title: 'New Super Mario Bros. movie is out',
            name: '03',
            score: '256',
            author: 'Miyamoto',
            permalink: 'url',
            is_self: false,
            is_video:false
        },
        '04': {
            url: 'https://i.ibb.co/kc59YZH/pexels-redrecords-2872418.jpg',
            title: 'Fan interview outside sport cars Grand Prix',
            name: '04',
            score: '3',
            author: 'Jon_Sistiaga2',
            permalink: 'url',
            is_self: false,
            is_video:false

        },
        '05': {
            url: 'https://i.ibb.co/cL8Dkb9/pexels-yaroslav-shuraev-8499870.jpg',
            title: 'Best raincoats for dogs',
            name: '05',
            score: 48,
            author: 'Zahi',
            permalink: 'url',
            is_self: false,
            is_video:false

        },
      },
        isLoading: false,
        hasError: false,
        //Triggers getPosts() in Post component when changed
        dispatchTrigger: 0,
        //Dinamic argument for getPosts(). SearchForm and navbar components can change it
        getPostsTerm: ''
    },
    //handle dispatched actions
    reducers: {
      //update score when user clicked like or dislike button
      updateScore(state, action){
        //retrieve new score and post's id
        const { newScore, postId } = action.payload;
        //update the score of the correct post
        state.posts[postId].score = newScore;
      },
      updateDispatchTrigger(state, action){
          state.dispatchTrigger += 1;
      },
      updateGetPostsTerm(state, action){
        state.getPostsTerm = action.payload;
      }
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
                  const {author, name, score, title, url, permalink, is_self, is_video} = action.payload;
                  //add new post to posts state, indexed by name if promise was successfull
                  state.posts[name] = {
                      author: author,
                      name: name,
                      score: score,
                      title: title,
                      url: url,
                      permalink: permalink,
                      is_self: is_self,
                      is_video: is_video
                    };
                  })
                .addCase(getPosts.rejected, (state, action) =>{
                  state.isLoading = false;
                  state.hasError = true;
                })
        }
});


//will create actions/payload for each fetch promise lifecycle, that the extrareducers will handle
export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async(arg, {dispatch, getState}) =>{
    const payload = await fetchPosts(arg);
    return payload
  }
);


//export slice reducer
export default postsSlice.reducer;
//create selectors
export const selectPosts = state => state.posts.posts;
export const selectDispatchTrigger = state => state.posts.dispatchTrigger;
export const selectGetPostsTerm = state => state.posts.getPostsTerm;
//export action creators
export const {updateScore, updateDispatchTrigger, updateGetPostsTerm } = postsSlice.actions;



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

