import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics', 
    initialState: {
        topics: {
            gaming: {
                title: 'Gaming',
                url: 'r/gaming',
                icon_img: 'https://i.ibb.co/ssQYD9c/icons8-game-controller-64.png'
            },
            celebrity: {
                title: 'Celebrity',
                url: 'r/popculturechat',
                icon_img: 'https://i.ibb.co/VHscXdb/icons8-celebrity-64.png'
            },
            sports: {
                title: 'Sports',
                url: 'r/sports',
                icon_img: 'https://i.ibb.co/wgxQb4X/icons8-sport-100.png'
            }
        }
    },
    reducers: {}
});


export default topicsSlice.reducer;
export const selectTopics = state => state.topics.topics;
