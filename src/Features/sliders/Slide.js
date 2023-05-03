import React from "react";
import { IMG } from "../../Mocks/multimedia";
import '../../Styles/sliders.css';
import { Link } from "react-router-dom";

//right now this component return mock imgs. When the API is set up, probably will return img passed by Sliders as prop
export const Slide = ()=>{
    return(
        <div className="slide"> 
            <Link className="link slide-link">
                <img className="slide-img" src={IMG.img2.src}/>       
            </Link> 
            <p className="slide-title">{IMG.img2.title}</p>
        </div>
    )
}