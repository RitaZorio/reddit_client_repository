import React from "react";
import {Topic} from './Topic';
import '../../../Styles/navbar.css';


export const Topics = () =>{
    return (
        <div className="topics-container">
            <h3 className="nav-title">Topics</h3>
                <Topic/>
                <Topic/>
                <Topic/>
        </div>
    )
}