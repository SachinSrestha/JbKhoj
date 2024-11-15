import JobsTable from '@/components/shared/JobsTable'
import Navbar from '@/components/shared/Navbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setFilteredJobName } from '@/store/jobslice'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

function AdminJobs() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const [filter, setFilter] = useState("");
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  useEffect(()=>{
    dispatch(setFilteredJobName(filter));
  },[filter])
  const { user } = useSelector((store) => store.auth);
  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user]);
  return (
    <div>
    <Navbar />
    <div className="max-w-6xl mx-auto mt-12">
      <div className="flex justify-between">
        <Input
          className="w-80 py-5 focus:border-black hover:border-gray-900"
          placeholder="Filter by company name and role"
          value={filter}
          onChange ={handleChange}
        />
        <Button
          className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700"
          onClick={() => navigate("/admin/jobs/create")}
        >
          New Job
        </Button>
      </div>
      <div className="mt-6">
        <JobsTable />
      </div>
    </div>
  </div>
  )
}

export default AdminJobs