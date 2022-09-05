import {createSlice} from '@reduxjs/toolkit';

const initialStateValue={
    Account_name:"through_my_quicky_lens",
    posts:6, 
    followers:283,
    following:274,
    name:'Kat Dennings',
    about:'World through my lens',
    image:'/images.jpg',
    location:'california Switzerland',
    Date:'Nov 5 2022',
    descp:'casual Ride on Swss looks like Thankyou',
}
export const detailsSlice=createSlice({
    name:'details',
    initialState:{value:initialStateValue},
    reducers:{
        accountdetails:(state)=>{
            state.value=initialStateValue;
        },
    },
});
export const {accountdetails}=detailsSlice.actions;
export default detailsSlice.reducer;