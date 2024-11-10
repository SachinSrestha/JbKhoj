import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { APPLICATION_API_END_POINT } from "../utils/constant.js";
import { setAllApplicants } from "@/store/applicationSlice.js";

const useGetApplicants = (jobId)=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchApplicants = async()=>{
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/getapplicants/${jobId}`, {withCredentials:true});
                if(res.data.success){
                    dispatch(setAllApplicants(res.data.job))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchApplicants();
    },[])
}

export default useGetApplicants