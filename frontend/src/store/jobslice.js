import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    singleJob: null,
    loading: false,
    allAdminJobs: [],
    filteredJobName: null,
    allAppliedJobs :[],
    searchJobQuery :"",
    filterJobs:{},
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setFilteredJobName: (state, action) => {
      state.filteredJobName = action.payload;
    },
    setAllAppliedJobs : (state, action)=>{
      state.allAppliedJobs = action.payload;
    },
    setSearchJobQuery :(state,action)=>{
      state.searchJobQuery= action.payload;
    },
    setFilterJobs :(state,action)=>{
      state.filterJobs= action.payload
    }
  },
});

export const { setAllJobs, setJob, setLoading, setAllAdminJobs,setFilteredJobName,setSearchJobQuery,setAllAppliedJobs,setFilterJobs} =
  jobSlice.actions;
export default jobSlice.reducer;
