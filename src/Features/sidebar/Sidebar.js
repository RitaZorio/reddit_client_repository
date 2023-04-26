import React from "react";

export const Sidebar = ()=>{
    return(
        <div className="sidebar-container">
           <div className="mosts-container">
           <button value="Newest"/>
           <button value="Most valued"/>
           </div>
           <button value="Go up"/> 
        </div>
    )
}