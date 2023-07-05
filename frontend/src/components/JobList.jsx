import React from "react";

export const JobList = ({ jobData }) => {
  return (
    <section className="grid pt-12 lg:grid-cols-3 md:grid-cols-2 gap-14   rounded-md items-center justify-center md:mx-44 ">
      {jobData.map((job) => {
        return (
          <div className=" bg-white w-96 pl p-12 relative">
            <span className="text-[16px] font-normal bg-white text-slate-500">
              {job.contract} <span className="bg-white ml-1 mr-1">.</span>{" "}
              {job.postedAt}
            </span>
            <h1 className="font-bold bg-white my-2">{job.position}</h1>
            <h2 className="text-[16px] font-normal bg-white mb-10 text-slate-500"> {job.company}</h2>
            <p className="w-[286px] text-indigo-500 text-[14px] font-bold bg-white -mb-3">
              {job.location}
            </p>{" "}
            <div
              style={{ backgroundColor: job.logoBackground }}
              className={` h-10 w-10 absolute  -top-7`}
            >
              <img src={job.logo} alt={job.company} />
            </div>
          </div>
        );
      })}
    </section>
  );
};
