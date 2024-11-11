import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name:"company",
    initialState:{
        allCompanies:[],
        singleCompany:null,
        filteredCompanyName :"",
        editCompany:null,
        loading:false,
    },
    reducers:{
        setAllCompanies:(state,action)=>{
            state.allCompanies = action.payload;
        },
        setCompany:(state, action)=> {
            state.singleCompany = action.payload;
        },
        setFilteredCompanyName: (state, action)=>{
            state.filteredCompanyName= action.payload;
        },
        setEditCompany :(state,action)=>{
            state.editCompany = action.payload;
        },
        setLoading :(state,action)=>{
            state.loading = action.payload;
        },
    }
})

export const {setCompany, setAllCompanies,setFilteredCompanyName,setEditCompany, setLoading} = companySlice.actions;

export default companySlice.reducer