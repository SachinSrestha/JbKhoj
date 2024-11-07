import { setAllJobs } from "@/store/jobslice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { JOB_API_END_POINT } from "../utils/constant.js";

const useGetAllJobs = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchALlJobs = async()=>{
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getjobs`, {withCredentials:true});
                if(res.data.success){
                    dispatch(setAllJobs(res.data.jobs))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchALlJobs();
    },[])
}

export default useGetAllJobs