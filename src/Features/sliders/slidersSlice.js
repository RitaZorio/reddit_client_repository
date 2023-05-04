import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSlides } from "../../Api/reddit";


//create the slice
const SliderSlice = createSlice({
    name: 'slides',
    initialState: {
        slides:{
            '04':{
                id:'04',
                url: 'https://i.ibb.co/w72SMHN/pexels-markus-spiske-3970330.jpg',
                title: 'this one shouldn\'t show up',
                is_video: true,
                is_self: false,
                permalink: 'url'
            },
            '05':{
                id:'05',
                url: 'https://i.ibb.co/w72SMHN/pexels-markus-spiske-3970330.jpg',
                title: 'This is just text',
                is_video: false,
                is_self: true,
                permalink: 'url'
            },
            '01':{
                id: '01',
                url: 'https://i.ibb.co/w72SMHN/pexels-markus-spiske-3970330.jpg',
                title: 'Stock-market is Sky-rocketing',
                is_self: false,
                is_video: false,
                permalink: 'url'
            },
            '02':{
                id: '02',
                url: 'https://i.ibb.co/w72SMHN/pexels-markus-spiske-3970330.jpg',
                title: 'Elon Musk Tesla market value drops',
                permalink: 'url'
            },
            '03':{
                id: '03',
                url: 'https://i.ibb.co/w72SMHN/pexels-markus-spiske-3970330.jpg',
                title: 'SPEND ALL YOUR MONEY - soon will be worth nothing',
                is_video: false,
                is_self: false, 
                permalink: 'url'
            }
           
        },
    isLoading: false,
    hasError: false
    },
    //handle dispatched actions
    reducers:{},
    //handle promise's lifecycle dispatched actions/payload
    extraReducers: (builder) =>{
        builder
                //if promise is pending
                .addCase(getSlides.pending, (state, action) =>{
                    state.isLoading = true;
                    state.hasError = false;
                })
                //if promise was fullfilled and slides were retrieved, add them to state
                .addCase(getSlides.fulfilled, (state, action) =>{
                  state.isLoading = false;
                  state.hasError = false;
                  const {id, title, url, is_video, is_self, permalink} = action.payload;
                  //add new slide to slide state, indexed by id
                  state.slides[id] = {
                      id: id,
                      title: title,
                      url: url, 
                      is_video: is_video,
                      is_self: is_self, 
                      permalink: permalink
                    };
                  })
                  //if promise was rejected
                  .addCase(getSlides.rejected, (state, action) =>{
                    state.isLoading = false;
                    state.hasError = true;
                  })
    }

});


//will create actions for each fetch promise lyfecycle, that extrareducers will handle
const getSlides = createAsyncThunk(
    'slides/getSlides',
    async(arg, {dispatch, getState})=>{
        const payload = await fetchSlides(arg);
        return payload
    }
);


//export the slice reducer
export default SliderSlice.reducer;
//create and export the slide selector
export const selectSlides = state => state.slides.slides;
