import React from "react";

export const Searchbar = () =>{
    return (
        <div className="search-container">
            <img className="logo"/>
            <div>
                <input type="text" placeholder="search"/>
                <button type="submit">
                <img className="lupa"/>
                </button>
            </div>
        </div>
    )
}