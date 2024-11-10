import ApplicantsTable from "@/components/shared/ApplicantsTable";
import Navbar from "@/components/shared/Navbar";
import useGetApplicants from "@/hooks/useGetApplicants";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ApplicantsList() {
  const params = useParams();
  const jobId = params.id;
  useGetApplicants(jobId);
  const {allApplicants} = useSelector(store=>store.application);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-6">
        <h1 className="text-xl font-semibold">Appplicants ({allApplicants?.applications.length})</h1>
        <div className="mt-5">
          <ApplicantsTable/>
        </div>
      </div>
    </div>
  );
}

export default ApplicantsList;
