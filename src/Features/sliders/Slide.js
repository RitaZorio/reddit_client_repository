import React from "react";
import '../../Styles/sliders.css';
import { Link } from "react-router-dom";
import { API_ROOT } from "../../Api/reddit";

//right now this component return mock imgs. When the API is set up, probably will return img passed by Sliders as prop
export const Slide = ({slide})=>{
    return(
        <div className="slide"> 
            <Link className="link slide-link" to={`${API_ROOT}${slide.permalink}`}>
                <img className="slide-img" src={slide.url}/>       
            </Link> 
            <p className="slide-title">{slide.title}</p>
        </div>
    )
}