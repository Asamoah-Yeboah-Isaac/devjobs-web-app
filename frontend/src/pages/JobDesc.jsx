import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { logos } from "../../logos";
import { Navbar } from "../components/Navbar";
// import "./index.css";

export const JobDesc = ({ darkMode, toggleDarkMode }) => {
  const { id } = useParams();
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    //  Fetch the jobs data from the backend
    const fetchedData = async () => {
      const response = await fetch(
        "https://devjobs-4akw.onrender.com/api/devjobs"
      );
      const data = await response.json();
      setJobData(data);
    };
    fetchedData();
  }, []);

  const job = jobData?.find((jobItem) => jobItem.id === Number(id));
  const logo = logos.find((logo) => logo.id === Number(id));

  // custom background colors are used for styling
  return (
    <div className={`${darkMode ? "  bg-[#121721]" : "bg-[#f4f6f8] "}`}>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <section
        className={` relative z-50 flex flex-col items-center  justify-center gap-5  md:gap-10  "
        }`}
      >
        {/* comapny site,company name ,logo */}
        <div
          className={`flex flex-col items-center justify-between -mt-5  rounded-lg md:h-auto md:flex-row md:pt-4 h-[250px] ${
            darkMode ? "bg-[#19202d]" : "bg-white"
          }`}
        >
          <div className="flex flex-col items-center gap-3 -mt-4 md:flex-row md:h-32 md:gap md:gap-6 w-[380px] md:w-[640px] ">
            <div
              className="flex items-center self-start justify-center p-6 mx-36 rounded-lg md:rounded-none md:px-8 md:mx-0 md:h-full  "
              style={{ backgroundColor: job?.logoBackground }}
            >
              <img
                className="object-contain h-auto w-16 "
                src={logo.logo}
                alt={` The logo of ${job?.company}`}
              />
            </div>

            {/* comapany site styles  */}
            <div className="flex flex-col items-center justify-center gap-1 ">
              <p
                className={`text-lg font-extrabold tracking-wider md:text-lg ${
                  darkMode ? "text-white" : "text-[#6e8089]"
                }`}
              >
                {job?.company}
              </p>
              <p className="font-medium " style={{ color: "#6E8089" }}>
                {`${job?.company}.com`.toLowerCase()}
              </p>
            </div>
          </div>

          {/* company site  */}
          <p
            className={`p-3 mb-6 ml-3 text-sm font-semibold tracking-wider  md:mr-6 rounded-md${
              darkMode
                ? " bg-gray-800 hover:bg-gray-700 hover:text-white"
                : " colorLightGray  hover:bg-gray-200 "
            } ${darkMode ? "text-white" : "text-black"}`}
          >
            <Link to={job?.website}> Company Site</Link>
          </p>
        </div>

        {/* postedAt,contract,apply, description and requirement of job  */}
        <div
          className={`p-8 w-[380px] md:w-[790px]  ${
            darkMode ? "bg-[#19202d]" : "bg-white"
          }`}
        >
          <div className="flex flex-col justify-between gap-10 md:gap-0 md:items-center md:flex-row  ">
            <div className="flex flex-col gap-2">
              <div
                className={`flex gap-2 font-normal leading-4 text-[#6e8089]`}
              >
                <p>{job?.postedAt}</p> <p>.</p>
                <p>{job?.contract}</p>
              </div>

              <p
                className={`text-lg font-bold leading-6 md:text-2xl  ${
                  darkMode ? " text-white " : ""
                }`}
              >
                {job?.position}
              </p>
              <p className="text-sm font-semibold leading-5 text-violet-700">
                {job?.location}
              </p>

              {/* first apply button  */}
            </div>
            <Link to={job?.apply}>
              <button className="w-full px-6 py-2 text-sm font-normal leading-6 tracking-wider text-white rounded-md bg-indigo-500 hover:bg-indigo-300">
                Apply Now
              </button>
            </Link>
          </div>

          <p
            className="py-8 leading-7 tracking-wide"
            style={{ color: "#6E8089" }}
          >
            {job?.description}
          </p>
          <h3
            className={`pb-4 text-lg font-semibold tracking-wider ${
              darkMode ? " text-white" : " text-black"
            }`}
          >
            Requirements
          </h3>
          <p
            className="pb-4 leading-7 tracking-wide"
            style={{ color: "#6E8089" }}
          >
            {job?.requirements.content}
          </p>

          <ul className="font-bold" style={{ color: "#6E8089" }}>
            {job?.requirements.items.map((item, index) => (
              <li
                className="pl-4 ml-4 leading-7 list-disc text-indigo-500"
                key={`${item}-${index}`}
              >
                <span
                  key={`${item}-${index}`}
                  className="font-normal "
                  style={{ color: "#6E8089" }}
                >
                  {" "}
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <h4
            className={`py-6 text-lg font-semibold tracking-wider${
              darkMode ? " text-white" : " text-black"
            }`}
          >
            What You Will Do
          </h4>
          <p
            className="pb-4 leading-7 tracking-wide "
            style={{ color: "#6E8089" }}
          >
            {job?.role.content}
          </p>
          <ol className="font-bold text-indigo-500 ">
            {job?.role.items.map((item, index) => (
              <li
                className="pl-4 ml-4 leading-7 list-decimal"
                key={`${item}-${index}`}
              >
                <span
                  key={`${item}-${index}`}
                  className="font-normal"
                  style={{ color: "#6E8089" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Footer contents */}
        <footer
          className={`py-8 w-full ${darkMode ? "bg-[#19202d]" : "bg-white"}`}
        >
          <div className="container mx-auto flex justify-center items-center md:flex md:justify-between  ">
            <div className="hidden md:block md:-ml-2  lg:mx-[360px]">
              <h1
                className={`font-extrabold  ${darkMode ? "text-white" : " "}`}
              >
                {job?.position}
              </h1>
              <span style={{ color: "#6E8089" }}>So Digial Inc.</span>
            </div>
            <Link to={`https://example.com/scoot/apply`}>
              <button
                className={`bg-indigo-500 hover:bg-indigo-300 text-white w-[380px] md:w-40 h-12 rounded-md md:-mr-3 lg:mr-[360px]`}
              >
                Apply Now
              </button>
            </Link>
          </div>
        </footer>
      </section>
    </div>
  );
};
