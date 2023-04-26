import React from "react";
import { Slide } from "./Slide";

export const Slider = () =>{
    return(
        <div>
            <h4>Trending</h4>
            {/*Problably will use .map() to create Slide components, 
            inside a setInterval so the content will fetch new posts every given time */}
            <Slide/>
            <Slide/>
            <Slide/>
        </div>
    )
}