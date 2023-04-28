import React from "react";
import '../../Styles/index.css';
import  {Post} from './Post'

//Right now this component is return mock posts. Probably will return posts with the info from the API received through PostSlice
export const Posts = ()=>{
    return(
    <div id="post-container">
        <Post/>
    </div>
    )
}