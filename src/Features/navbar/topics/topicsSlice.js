import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics', 
    initialState: {
        topics: {
            gaming: {
                title: 'Gaming',
                url: '/t/gaming/',
                icon_img: 'https://i.ibb.co/ssQYD9c/icons8-game-controller-64.png'
            },
            celebrity: {
                title: 'Celebrity',
                url: '/t/celebrity/',
                icon_img: 'https://i.ibb.co/VHscXdb/icons8-celebrity-64.png'
            },
            sports: {
                title: 'Sports',
                url: '/t/celebrity',
                icon_img: 'https://i.ibb.co/wgxQb4X/icons8-sport-100.png'
            }
        }
    },
    reducers: {}
});


export default topicsSlice.reducer;
export const selectTopics = state => state.topics.topics;
