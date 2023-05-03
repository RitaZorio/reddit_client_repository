import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics', 
    initialState: {
        topics: {
            gaming: {
                name: 'Gaming',
                url: '/t/gaming/',
                icon: 'https://i.ibb.co/ssQYD9c/icons8-game-controller-64.png'
            },
            celebrity: {
                name: 'Celebrity',
                url: '/t/celebrity/',
                icon: 'https://i.ibb.co/VHscXdb/icons8-celebrity-64.png'
            },
            sports: {
                name: 'Sports',
                url: '/t/celebrity',
                icon: 'https://i.ibb.co/wgxQb4X/icons8-sport-100.png'
            }
        }
    },
    reducers: {}
});


export default topicsSlice.reducer;
export const selectTopics = state => state.topics.topics;
