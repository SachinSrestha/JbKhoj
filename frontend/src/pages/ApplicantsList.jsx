import ApplicantsTable from "@/components/shared/ApplicantsTable";
import Navbar from "@/components/shared/Navbar";
import useGetApplicants from "@/hooks/useGetApplicants";
import { Loader2 } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ApplicantsList() {
  const params = useParams();
  const jobId = params.id;
  useGetApplicants(jobId);
  const { allApplicants } = useSelector((store) => store.application);
  const { loading } = useSelector((store) => store.company);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex items-center space-x-2">
            <Loader2 className="w-8 h-8 text-gray-600 animate-spin" />
            <span className="text-gray-600 font-medium text-lg">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="max-w-7xl mx-auto mt-6">
            <h1 className="text-xl font-semibold">
              Appplicants ({allApplicants?.applications?.length})
            </h1>
            <div className="mt-5">
              <ApplicantsTable />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ApplicantsList;
