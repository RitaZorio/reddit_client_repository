import React, { useEffect } from "react";
import { ICONS } from "../../Mocks/multimedia";
import '../../Styles/searchbar.css';
import { useDispatch} from "react-redux";
import { useState } from "react";
import { getPosts} from "../posts/postsSlice";
import { setStoreSearchTerm } from "./searchSlice";

export const SearchForm = () =>{
    //import dispatch to dispatch actions
     const dispatch = useDispatch();

     //create a local state with the value of the store
     const [ searchTerm, setSearchTerm ] = useState('');
    
     useEffect(()=>{
        dispatch(setStoreSearchTerm(searchTerm));
     }, [searchTerm]);

     //handle change in input field and updates state
     const handleChange = (e) =>{
         const input = e.target.value;
         const newInput = input.replace(/ /g, '%');
         setSearchTerm(newInput);
     }
 
     //handle search submit and triggers a fetchPost with searchTerm 
     const handleSubmit = (e)=>{
         e.preventDefault();
         //esto es asi???  CHECCCCKKKKK
         dispatch(getPosts(searchTerm));
         //clear the searchTerm state after dispatching the action to retrieve posts
        setSearchTerm('');
      }

    return (
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" placeholder="search" value={searchTerm}/>
            <button  className="icon" type="submit">
                <img className="icon" id="icon" src={ICONS.search.src}/>
            </button>
            </form>
        )
}