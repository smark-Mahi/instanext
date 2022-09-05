import {createSlice} from '@reduxjs/toolkit';

const initialStateValue={
    num:Math.floor((Math.random()*100)+500)
}
export const commentsSlice=createSlice({
    name:'Comments',
    initialState:{value:initialStateValue},
    reducers:{
        commentsdetails:(state)=>{
            state.value=initialStateValue
        },
    },
});
export const {commentsdetails}=commentsSlice.actions;
export default commentsSlice.reducer;