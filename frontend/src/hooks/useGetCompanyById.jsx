import {  setCompany } from "@/store/companySlice.js";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { COMPANY_API_END_POINT } from "../utils/constant.js";

const useGetCompanyById= (companyId)=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchCompanyById= async()=>{
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/getcompany/${companyId} `, {withCredentials:true});
                if(res.data.success){
                    dispatch(setCompany(res.data.company))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchCompanyById();
    },[companyId, dispatch])
}

export default useGetCompanyById
