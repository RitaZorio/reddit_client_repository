import { createSlice } from "@reduxjs/toolkit";
import { fetchCommunities } from "../../../Api/reddit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IMG } from "../../../Mocks/multimedia";

export const communitiesSlice = createSlice({
    name: 'communities',
    initialState:{
        communities:{
            '05':{
                id:'05',
                title: 'this is a post thread',
                icon_img: '',
                url: 'url'
            },
            '01':{
                id: '01',
                title: 'Animal Lovers', 
                icon_img: 'https://i.ibb.co/KDy8zpH/guinea-portrait.jpg',
                url: 'url'
            },
            '02': {
                id: '02',
                title: 'Crypto Bros',
                icon_img: 'https://i.ibb.co/KDy8zpH/guinea-portrait.jpg',
                url:'url'
            },
            '03': {
                id: '03',
                title:'Leyend of Zelda',
                icon_img: 'https://i.ibb.co/KDy8zpH/guinea-portrait.jpg',
                url:'url'
            },
            '04':{
                id: '04',
                title: 'Should\'nt show up',
                icon_img: 'emptyString',
                url:'url'
            }
        },
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

//create selector for communities
export const selectCommunities = state => state.communities.communities;

export default communitiesSlice.reducer;