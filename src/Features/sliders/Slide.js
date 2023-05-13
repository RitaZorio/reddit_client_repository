import React from "react";
import '../../Styles/sliders.css';
import { Link } from "react-router-dom";
import { getPosts } from "../posts/postsSlice";
import { useDispatch } from "react-redux";

//right now this component return mock imgs. When the API is set up, probably will return img passed by Sliders as prop
export const Slide = ({slide})=>{

//make available dispatch()
 const dispatch = useDispatch();

 //will dispatch action to retrieve clicked post 
const handleClick = ()=>{
    dispatch(getPosts(slide.permalink));

}

    return(
        <div key={slide.id} className="slide"> 
            <Link className="link slide-link" onClick={handleClick}>
                <img className="slide-img" src={slide.url}/>       
            <p className="slide-title">{slide.title}</p>
            </Link>
        </div>
    )
};