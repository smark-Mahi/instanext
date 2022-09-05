import {createSlice} from '@reduxjs/toolkit';

const initialStateValue={
    num:Math.floor((Math.random()*500)+500)
}
export const likesSlice=createSlice({
    name:'Likes',
    initialState:{value:initialStateValue},
    reducers:{
        likesdetails:(state)=>{
            state.value=initialStateValue
        },
    },
});
export const {commentsdetails}=likesSlice.actions;
export default likesSlice.reducer;