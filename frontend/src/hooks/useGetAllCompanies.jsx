import { setAllCompanies } from "@/store/companySlice.js";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { COMPANY_API_END_POINT } from "../utils/constant.js";

const useGetAllCompanies = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchAllCompanies = async()=>{
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/mycompanies`, {withCredentials:true});
                if(res.data.success){
                    dispatch(setAllCompanies(res.data.companies))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllCompanies();
    },[])
}

export default useGetAllCompanies