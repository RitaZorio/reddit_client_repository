import React from "react";
import {Topic} from './Topic';
import '../../../Styles/navbar.css';
import { useSelector } from "react-redux";
import { selectTopics } from "./topicsSlice";


export const Topics = () =>{
    //select topics from store state
    const topics = useSelector(selectTopics);
    //make an array of obj from topics obj
    const topicsArr = Object.values(topics);

    return (
        <div className="topics-container">
            <h3 className="nav-title">Hot Topics</h3>
            {/*create Topic component for each topic and pass topic obj as props */}
            {topicsArr.map( (topic, index) =>
            <Topic key={index} topic={topic}/>
            )}
        </div>
    )
}