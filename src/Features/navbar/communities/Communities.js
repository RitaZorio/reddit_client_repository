import React from "react";
import {Community} from './Community';
import  '../../../Styles/index.css';

export const Communities = () => {
    return (
        <div className="topics-container">
            <h3 className="nav-title">Communities</h3>
            <Community/>
            <Community/>
            <Community/>
        </div>
    )
}