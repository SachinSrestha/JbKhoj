import { setAllJobs, setLoading } from "@/store/jobslice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JOB_API_END_POINT } from "../utils/constant.js";

const useGetAllJobs = (query ="")=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchALlJobs = async()=>{
            try {
                dispatch(setLoading(true))
                const res = await axios.get(`${JOB_API_END_POINT}/getjobs?keyword=${query}`, {withCredentials:true});
                if(res.data.success){
                    dispatch(setAllJobs(res.data.jobs))
                }
            } catch (error) {
                console.log(error)
            }finally{
                dispatch(setLoading(false));
            }
        }
        fetchALlJobs();
    },[])
}

export default useGetAllJobs