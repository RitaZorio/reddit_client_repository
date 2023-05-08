import React from "react";
import { Slide } from "./Slide";
import '../../Styles/sliders.css';
import { useSelector, useDispatch } from "react-redux";
import { selectSlides, getSlides } from "./slidersSlice";
import { useEffect, useState } from "react";

export const Slider = () =>{

    //make available dispatch()
    const dispatch= useDispatch();

    //will fetch slides on mounting
    useEffect(()=>{
        dispatch(getSlides());
    }, []);


    //get all retrieved slide posts
    const slides = useSelector(selectSlides);
    
    //create an array of slides with valid img data
    let validSlides = [];
    const slidesArr = Object.values(slides);
    slidesArr.map( slide =>{
        if(!slide.is_video && !slide.is_self){
            validSlides.push(slide)
        }
    });
    
    //create a local state to change every minute. Default state is validSlides 
    const [ slideState, setSlideState] = useState(validSlides);

    //will set up an interval when the component mounts that'll change local state with new slides every minute
    useEffect(() =>{
        const intervalSlide = setInterval(()=>{
            let newSlides = [];
            //randomly pick 3 slides and push them into the array above
            for(let i = 0; i < 3; i++){
              let randomIndex = Math.floor(Math.random() * validSlides.length);
              //if the slide is not already in the array pushes it
              if(!newSlides.includes(validSlides[randomIndex])){
                newSlides.push(validSlides[randomIndex]);
            }else{
                //if it is already in the array dosn't push it an runs the loop one more time
                i--
            }
        }
        //update the local state   
        setSlideState(newSlides);    
        }, 45000);

        //return a fn that clean up the side-effect upon the component un-mounts
        return () => clearInterval(intervalSlide);
    },[]);

    return(
        <div className="slider-container">
            <h2>Trending</h2>
            <div className="slides">
            {slideState.map( (slide, index) =>{
                {/*this prevents the slide to render all slides on mounting the app, since the initial local state is ALL validSlides */}
                while( index < 3 ){
                    return <Slide slide={slide} />
                }
            })} 
            </div>
        </div>
    )
}