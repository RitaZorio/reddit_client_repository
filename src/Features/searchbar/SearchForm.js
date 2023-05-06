import React, { useEffect } from "react";
import { ICONS } from "../../Mocks/multimedia";
import '../../Styles/searchbar.css';
import { useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import { setStoreSearchTerm, selectSearchTerm } from "./searchSlice";
import { updateDispatchTrigger, updateGetPostsTerm } from "../posts/postsSlice";


export const SearchForm = () =>{
    //import dispatch to dispatch actions
     const dispatch = useDispatch();

     //create a local state with the value of the store
     const [ searchTerm, setSearchTerm ] = useState('');
     //get the current searchTerm from store 
     const searchTermStore = useSelector(selectSearchTerm)

     useEffect(()=>{
        dispatch(updateGetPostsTerm(searchTermStore));
        dispatch(updateDispatchTrigger());
     }, [searchTermStore]);

     //handle change in input field and updates state
     const handleChange = (e) =>{
         const input = e.target.value;
         const newInput = input.replace(/ /g, '%');
         setSearchTerm(newInput);
    
     }
 
     //handle search submit and triggers a fetchPost with searchTerm 
     const handleSubmit = (e)=>{
         e.preventDefault();
         dispatch(setStoreSearchTerm(searchTerm));
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