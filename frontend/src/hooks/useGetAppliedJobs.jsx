import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { APPLICATION_API_END_POINT } from "../utils/constant.js";
import { setLoading } from "@/store/companySlice.js";
import { setAllAppliedJobs } from "@/store/jobslice.js";

const useGetAppliedJobs = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchAppliedJobs = async()=>{
            try {
                dispatch(setLoading(true));
                const res = await axios.get(`${APPLICATION_API_END_POINT}/getappliedjobs`, {withCredentials:true});
                if(res.data.success){
                    dispatch(setAllAppliedJobs(res.data.applications))
                }
            } catch (error) {
                console.log(error)
            }finally{
                dispatch(setLoading(false))
            }
        }
        fetchAppliedJobs();
    },[])
}

export default useGetAppliedJobs