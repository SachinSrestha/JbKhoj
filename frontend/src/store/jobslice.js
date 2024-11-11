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
    }
  },
});

export const { setAllJobs, setJob, setLoading, setAllAdminJobs,setFilteredJobName,setAllAppliedJobs} =
  jobSlice.actions;
export default jobSlice.reducer;
