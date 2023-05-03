import React from "react";
import { Slide } from "./Slide";
import '../../Styles/sliders.css';

export const Slider = () =>{
    return(
        <div className="slider-container">
            <h2>Trending</h2>
            <div className="slides">
            {/*Problably will use .map() to create Slide components, 
            inside a setInterval so the content will fetch new posts every given time */}
            <Slide/>
            <Slide/>
            <Slide/>
            </div>
        </div>
    )
}