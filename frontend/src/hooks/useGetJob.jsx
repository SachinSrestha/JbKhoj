import { setJob, setLoading } from "@/store/jobslice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JOB_API_END_POINT } from "../utils/constant.js";

const useGetJob = (jobId, setIsApplied)=>{
    const dispatch = useDispatch();
    const {user} = useSelector(store=>store.auth);
    useEffect(()=>{
        const fetchJob = async()=>{
            try {
                dispatch(setLoading(true));
                const res = await axios.get(`${JOB_API_END_POINT}/getjob/${jobId}`, {withCredentials:true});
                if(res.data.success){
                    dispatch(setJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application=>application.applicant === user?._id))
                }
            } catch (error) {
                console.log(error)
            }finally{
                dispatch(setLoading(false));
            }
        }
        fetchJob();
    },[jobId, dispatch, user?._id]);
}

export default useGetJob