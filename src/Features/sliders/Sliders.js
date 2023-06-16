import React, { useState } from "react";
import { Slide } from "./Slide";
import { IsLoading } from "../IsLoading";
import '../../Styles/sliders.css';
import { useSelector, useDispatch } from "react-redux";
import { selectSlides, getSlides, selectIsLoading} from "./slidersSlice";
import { useEffect } from "react";
// import { areLoading } from "../../Api/reddit";

export const Slider = () => {

    //make available dispatch()
    const dispatch = useDispatch();

    //will fetch slides on mounting
    useEffect(() => {
        dispatch(getSlides());
    }, []);

    //get all retrieved slide posts
    const slides = useSelector(selectSlides);
    const isLoading = useSelector(selectIsLoading);

    const [picIndex, setPicIndex] = useState(0);

    useEffect(() => {
        const slideTimeout = setTimeout(() => {
            setPicIndex((picIndex + 1) % (slides.length - 3));
        }, 3000);
        return () => clearTimeout(slideTimeout);
    }, [picIndex]);

    //create a local state to change every minute. Default state is all slides
    // const [slideState, setSlideState] = useState(slides);

    //fn that sets new local state when called inside the useEffect below
    // const updateState = (arr) => {
    //     setSlideState(arr);
    // };

    
    //will set up an interval when the component mounts that'll change local state with new slides every minute
    // useEffect(() => {
    //     const intervalSlide = setInterval(() => {
    //         let newSlides = [];
    //         //randomly pick 3 slides and push them into the array above
    //         for (let i = 0; i < slides.length; i++) {
    //             let randomIndex = Math.floor(Math.random() * slides.length);
    //             //if the slide is not already in the array pushes it
    //             if (!newSlides.includes(slides[randomIndex])) {
    //                 newSlides.push(slides[randomIndex]);
    //             } else {
    //                 //if it is already in the array dosn't push it an runs the loop one more time
    //                 i--
    //             }
    //         }
    //         //update the local state using a fn outside the useEffect  
    //         updateState(newSlides);
    //     }, 35000);

    //     //return a fn that clean up the side-effect upon the component un-mounts
    //     return () => clearInterval(intervalSlide);
    // }, [slideState]);

    return (
        <div className="slider-container">
            <h2>Trending</h2>
            { isLoading
                ? <IsLoading/>
                : <div className="slides">
                    {/* slice return new array with items with index between 0-2, and map each one of them*/}
                    {slides.slice(picIndex, picIndex + 3).map((slide, index) => {
                        return <Slide key={index} slide={slide} />
                    })}
                </div>
            }
        </div>
    )
}