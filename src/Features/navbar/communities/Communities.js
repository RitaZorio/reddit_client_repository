import React from "react";
import {Community} from './Community';
import  '../../../Styles/navbar.css';
import { selectCommunities } from "./communitiesSlice";
import { useSelector } from "react-redux";


export const Communities = () => {
//select all communities retrieved from API
const communities = useSelector(selectCommunities);
const communitiesArr = Object.values(communities);

//create an array with communities with valid img data
let validCommunities = [];
communitiesArr.map( community =>{
    if(community.icon_img !== ""){
        validCommunities.push(community)
    }
});


     return (
        <div className="topics-container">
            <h3 className="nav-title">Communities</h3>
            {/*create only 3 Community components and pass them a comm obj as props */}
            {validCommunities.map((comm, index) =>{
                while(index < 3){
                return <Community comm={comm}/>
                }
              }
            )}
        </div>
    )
}