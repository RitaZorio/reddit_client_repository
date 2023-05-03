import { createSlice } from "@reduxjs/toolkit";
import { fetchCommunities } from "../../../Api/reddit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const communitiesSlice = createSlice({
    name: 'communities',
    initialState:{
        communities:{},
        isLoading: false,
        hasError: false
    }, 
    reducers:{},
    extraReducers:(builder) =>{
        builder
                .addCase(getCommunities.pending, (state, action) =>{
                  state.isLoading = true;
                  state.hasError = false;
                })
                //add new community to communities obj, indexed by id if promise was successfull
                .addCase(getCommunities.fulfilled, (state, action) =>{
                  state.isLoading = false;
                  state.hasError = false;
                  const {icon_img, title, url, id} = action.payload;
                     state.communities[id] = {
                                id: id, 
                                icon_img: icon_img,
                                title: title, 
                                url: url
                                };
                })
                .addCase(getCommunities.rejected, (state, action) =>{
                    state.isLoading = false;
                    state.hasError = true;
                })
    }
});



//will create actions/payload for each fetch promise lifecycle, that the extrareducers will handle
//will populate communities navbar
const getCommunities = createAsyncThunk(
    'communities/getCommunities',
    async (arg, {dispatch, getState}) =>{
    const payload = await fetchCommunities();
    return payload
    }
);

//create selector for communities excluding the ones without icon_img
export const selectCommunities = state =>{
    const allCommunities = state.communities.communities;
    let selectedCommunities = [];
    Object.values(allCommunities).map( community =>{
        if(community.icon_img !== ""){
            selectedCommunities.push(community)
        };
      return selectedCommunities
    });
};

export default communitiesSlice.reducer;