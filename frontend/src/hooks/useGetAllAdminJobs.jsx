import { setAllJobs } from "@/store/jobslice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { JOB_API_END_POINT } from "../utils/constant.js";

const useGetAllAdminJobs = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchAllAdminJobs = async()=>{
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, {withCredentials:true});
                if(res.data.success){
                    dispatch(setAllJobs(res.data.jobs))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllAdminJobs();
    },[])
}

export default useGetAllAdminJobs