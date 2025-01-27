import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { APPLICATION_API_END_POINT } from "../utils/constant.js";
import { setAllApplicants } from "@/store/applicationSlice.js";
import { setLoading } from "@/store/companySlice.js";

const useGetApplicants = (jobId)=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchApplicants = async()=>{
            try {
                dispatch(setLoading(true));
                const res = await axios.get(`${APPLICATION_API_END_POINT}/getapplicants/${jobId}`, {withCredentials:true});
                if(res.data.success){
                    dispatch(setAllApplicants(res.data.job))
                }
            } catch (error) {
                console.log(error)
            }finally{
                dispatch(setLoading(false))
            }
        }
        fetchApplicants();
    },[])
}

export default useGetApplicants