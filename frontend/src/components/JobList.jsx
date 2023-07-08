import { logos } from "../../logos";
//mapping through data.json to display neccessary details on job card(id,contract,postedAt,position,company,location)
logos;
export const JobList = ({ jobData }) => {
  return (
    <section className="grid pt-24 lg:grid-cols-3 md:grid-cols-2 gap-14 lg:gap-x-0 lg:pl-24 rounded-md items-center justify-center md:mx-10 md:pr-10 cursor-pointer">
      {jobData.map((job) => {
        return (
          <div
            className=" bg-white w-96  pl p-12  relative"
            key={job.id}
          >
            <span className="text-[16px] font-normal bg-white text-slate-500">
              {job.contract} <span className="bg-white ml-1 mr-1">.</span>{" "}
              {job.postedAt}
            </span>
            <h1 className="font-bold bg-white my-2">{job.position}</h1>
            <h2 className="text-[16px] font-normal bg-white mb-10 text-slate-500">
              {" "}
              {job.company}
            </h2>
            <p className="w-[286px] md:w-[270px] text-indigo-500 text-[14px] font-bold bg-white -mb-3">
              {job.location}
            </p>{" "}
            <div
              style={{ backgroundColor: job.logoBackground }}
              className={` h-10 w-10 absolute  -top-7`}
            >
              {/* mapping through logos to display job logos  */}
              {logos.map((logo, index) => {
                if (logo.id === job.id) {
                  return (
                    <img
                      key={logo.id - index}
                      src={logo.logo}
                      alt={job.company}
                      className=" flex justify-center items-center p-3"
                    />
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};
