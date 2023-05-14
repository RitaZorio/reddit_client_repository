import React from "react";


export const IsLoading = () => {

    return (
        <div id="isLoading">
            <h3>Loading</h3>
            <div className="lds-spinner">
                <div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div>
                <div></div><div></div><div></div><div></div>
            </div>
        </div>
    )
}