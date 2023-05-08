import React, { useEffect } from "react";
import { ICONS } from "../../Mocks/multimedia";
import '../../Styles/searchbar.css';
import { useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import { setStoreSearchTerm, selectSearchTerm } from "./searchSlice";
import { updateGetPostsTerm } from "../posts/postsSlice";


export const SearchForm = () =>{
    //import dispatch to dispatch actions
     const dispatch = useDispatch();

     //create a local state with the value of the store
     const [ searchTerm, setSearchTerm ] = useState('');

     //handle change in input field and updates state
     const handleChange = (e) =>{
         const input = e.target.value;
         setSearchTerm(input);
    }
 
     //handle search submit and triggers a fetchPost with searchTerm 
     const handleSubmit = (e)=>{
         e.preventDefault();
         const newInput = searchTerm.replace(/ /g, '%');
         const Qparams = 'search.json?q='+newInput
         dispatch(setStoreSearchTerm(newInput));
         dispatch(updateGetPostsTerm(Qparams));
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