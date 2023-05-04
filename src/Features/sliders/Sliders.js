import React from "react";
import { Slide } from "./Slide";
import '../../Styles/sliders.css';
import { useSelector } from "react-redux";
import { selectSlides } from "./slidersSlice";

export const Slider = () =>{
    //get all retrieved slide posts
    const slides = useSelector(selectSlides);
    
    //create an array of slides with valid img data
    let validSlides = [];
    const slidesArr = Object.values(slides);
    slidesArr.map( slide =>{
        if(!slide.is_video && !slide.is_self){
            validSlides.push(slide)
        }
    })

    return(
        <div className="slider-container">
            <h2>Trending</h2>
            <div className="slides">
            {validSlides.map( (slide, index) =>{
                while( index < 3 ){
                    return <Slide slide={slide} />
                }
            })} 
            </div>
        </div>
    )
}