import { configureStore,combineReducers } from "@reduxjs/toolkit";
import {createWrapper} from 'next-redux-wrapper'
import details from './Details'
import Likes from './Likescomments'
import Comments from './comments'
const combinedReducers=combineReducers({
    Likes,
    details,
    Comments
});

export const makestore=()=>
configureStore({
   reducer: combinedReducers,
});
export const wrapper=createWrapper(makestore)
