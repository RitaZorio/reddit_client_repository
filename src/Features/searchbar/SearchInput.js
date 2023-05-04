import React from "react";
import { ICONS } from "../../Mocks/multimedia";
import '../../Styles/searchbar.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../posts/postsSlice";

export const SearchInput = () =>{

     //local state to store changes in input
     const [searchTerm, setSearchTerm] = useState('');
     //give access to dispatch fn
     const dispatch = useDispatch();
     
     //handle change in input field and updates state
     const handleChange = (e) =>{
         const input = e.target.value;
         const newInput = input.replace(/ /g, '%')
         setSearchTerm(newInput);
     }
 
     //handle search submit and triggers a fetchPost with searchTerm endpoint
     const handleSubmit = (e)=>{
         e.preventDefault();
         //esto es asi???  CHECCCCKKKKK
         dispatch(getPosts(searchTerm));
 
     }

    return (
            <>
            <input onChange={handleChange} type="text" placeholder="search"/>
            <button  className="icon" type="submit" onSubmit={handleSubmit}>
                <img className="icon" id="icon" src={ICONS.search.src}/>
            </button>
            </>
        )
}