import { createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "../../Api/reddit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const CommentsSlice = createSlice({
name: 'comments',
initialState: {
    comments: {},
    isLoading: false,
    hasError: false
},
reducers: {},
extraReducers:(builder) =>{
    builder
            .addCase(getComments.pending, (state, action) =>{
              state.isLoading = true;
              state.hasError = false;
            })
            //add new community to communities obj, indexed by id if promise was successfull
            .addCase(getComments.fulfilled, (state, action) =>{
              state.isLoading = false;
              state.hasError = false;          
              const { author, id,  link_id, body } = action.payload;
              state.comments[id] ={
                    author: author,
                    id: id,
                    link_id: link_id, 
                    body: body
                };
              })
            .addCase(getComments.rejected, (state, action) =>{
                state.isLoading = false;
                state.hasError = true;
            })
    }
});


//will create actions/payload for each fetch promise lifecycle, that the extrareducers will handle
//will get comments for
const getComments = createAsyncThunk(
    'comments/getComments',
    async (arg, {dispatch, getState}) =>{
      const payload = await fetchComments(arg);
      return payload
    });
  
  
export default CommentsSlice.reducer;
//create selector for comments
export const selectComments = state => state.comments.comments;

