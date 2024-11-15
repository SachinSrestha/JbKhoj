import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        loading:false,
        user:null,
        isFirstTime:true,
    },
    reducers:{
        setLoading : (state,action)=>{
            state.loading= action.payload;
        },
        setUser :(state, action)=>{
            state.user = action.payload;
        },
        setIsFirstTime : (state,action)=>{
            state.isFirstTime= action.payload;
        },
    },
})

export const {setLoading, setUser,setIsFirstTime} =authSlice.actions;

export default authSlice.reducer