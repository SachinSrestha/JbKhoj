import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name:"company",
    initialState:{
        allCompanies:[],
        singleCompany:null,
    },
    reducers:{
        setAllCompanies:(state,action)=>{
            state.allCompanies = action.payload;
        },
        setCompany:(state, action)=> {
            state.singleCompany = action.payload;
        },
    }
})

export const {setCompany, setAllCompanies} = companySlice.actions;

export default companySlice.reducer