import React from "react";
import { Comment } from "./Comment";

//will render in Post Outlet component if user clicks comments button
export const Comments = ()=>{
    return(
        <div>
            {/*Probably will use .map to render Comment and pass down props*/}
            <Comment/>
            <Comment/>
        </div>
    )
};