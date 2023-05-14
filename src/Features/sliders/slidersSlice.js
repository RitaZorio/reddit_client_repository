import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSlides } from "../../Api/reddit";


//create the slice
const SliderSlice = createSlice({
    name: 'slides',
    initialState: {
        slides:{},
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
                  const slidesArr = action.payload;
                   slidesArr.map (slide =>{
                    const {id, title, url, is_video, is_self, permalink} = slide.data;
                    //add new slide to slide state, indexed by id
                    state.slides[id] = {
                        id: id,
                        title: title,
                        url: url, 
                        is_video: is_video,
                        is_self: is_self, 
                        permalink: permalink
                        };
                  });
                })
                  //if promise was rejected
                  .addCase(getSlides.rejected, (state, action) =>{
                    state.isLoading = false;
                    state.hasError = true;
                  })
    }

});


//will create actions for each fetch promise lyfecycle, that extrareducers will handle
export const getSlides = createAsyncThunk(
    'slides/getSlides',
    async(arg, {dispatch, getState})=>{
        const payload = await fetchSlides(arg);
        return payload
    }
);


//export the slice reducer
export default SliderSlice.reducer;
//create selector that filters out invalid slides
export const selectSlides = state => {
    let validSlides = []
    const slidesArr = Object.values(state.slides.slides);
    slidesArr.map(slide => {
        if (!slide.is_video && !slide.is_self) {
            validSlides.push(slide);
        }
    });
    return validSlides;
};