import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
    name: 'searchTerm',
    initialState:{
        searchTerm: '',
    },
    reducers:{
        setStoreSearchTerm(state, action){
            state.searchTerm = 'search.json?q='+action.payload;
        }
    }
});


//export the slice reducer
export default searchSlice.reducer;
//export the action creators
export const {setStoreSearchTerm} = searchSlice.actions;
//export selectors
export const selectSearchTerm = state => state.searchTerm.searchTerm;
