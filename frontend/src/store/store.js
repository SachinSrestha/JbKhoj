import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.js"
import jobSlice from "./jobslice.js"

const store = configureStore({
    reducer:{
        auth :authSlice,
        job:jobSlice,
    }
})

export default store