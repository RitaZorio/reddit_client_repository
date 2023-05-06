import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
    name: 'searchTerm',
    initialState:{},
    reducers:{
        setStoreSearchTerm(state, action){
            state.setSearchTerm = 'search.json?q='+action.payload;
        }
    }
});


//export the slice reducer
export default searchSlice.reducer;
//export the actio creators
export const setStoreSearchTerm = searchSlice.actions.setStoreSearchTerm;
//export seletor
export const selectSearchTerm = state => state.searchTerm;