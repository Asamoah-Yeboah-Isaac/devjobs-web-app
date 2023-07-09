import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { logos } from "../../logos";
import { Navbar } from "../components/Navbar";
// import "./index.css";

export const JobDesc = ({ isDarkMode }) => {
  const { id } = useParams();
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    //  Fetch the jobs data from the backend
    const fetchedData = async () => {
      const response = await fetch("http://localhost:8000/api/devjobs");
      const data = await response.json();
      setJobData(data);
    };
    fetchedData();
  }, []);

  const job = jobData?.find((jobItem) => jobItem.id === Number(id));
  const logo = logos.find((logo) => logo.id === Number(id));
  // console.log(job);
  console.log(logo.logo);

  // custom background colors are used for styling
  return (
    <div>
      <Navbar />
      <section 
        className={`colorLightGray  relative z-50 flex flex-col items-center  justify-center gap-5  md:gap-20`}
        
      > 
      {/* comapny site,company name ,logo */}
        <div
          className={`flex flex-col items-center justify-between -mt-5  rounded-lg md:h-auto md:flex-row md:pt-4 h-[250px]  ${
            isDarkMode ? " border-b-red-400" : " bg-white"
          }`}
        >
          <div className="flex flex-col items-center gap-3 -mt-4 md:flex-row md:h-24 md:gap-6 w-[380px]  ">
            <div
              className="flex items-center self-start justify-center p-6 mx-4 rounded-lg md:rounded-none md:px-8 md:mx-0  "
              style={{ backgroundColor: job?.backgroundColor }}
            >
              <img
                className="object-contain h-auto min-w-full "
                src={logo.logo}
                alt={` The logo of ${job?.company}`}
              />
            </div>
            {/* comapany site styles  */}
            <div className="flex flex-col items-center justify-center gap-1 ">
              <p
                className={`text-lg font-extrabold tracking-wider md:text-lg${
                  isDarkMode ? " text-white" : " text-black"
                }`}
              >
                {job?.company}
              </p>
              <p className="font-medium " style={{color:'#6E8089' }}>
                {`${job?.company}.com`.toLowerCase()}
              </p>
            </div>
          </div>
                     {/* company site  */}
          <p
            className={`p-3 mb-6 ml-3 text-sm font-semibold tracking-wider  md:mr-6 rounded-md${
              isDarkMode
                ? " bg-gray-800 hover:bg-gray-700 hover:text-white"
                : " colorLightGray  hover:bg-gray-200 "
            }`}
            style={{color:'#939BF4' }}
          >
            <Link to={job?.website}> Company Site</Link>
          </p>
        </div>
         {/* details,apply, description and requirement of job  */}
        <div
          className={`p-8 w-[380px] ${
            isDarkMode ? " bg-red-500" : " bg-white"
          }`}
        >
          <div className="flex flex-col justify-between gap-10 md:gap-0 md:items-center md:flex-row ">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 font-normal leading-4 ">
                <p>{job?.postedAt}</p> <p>.</p>
                <p>{job?.contract}</p>
              </div>
              <p
                className={`text-lg font-bold leading-6 md:text-2xl   ${
                  isDarkMode ? " text-white " : " text-blue-900 "
                }`}
                style={{color:'#121721'}}
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
          <p className="py-8 leading-7 tracking-wide" style={{color:'#6E8089'}}>
            {job?.description}
          </p>
          <h3
            className={`pb-4 text-lg font-semibold tracking-wider ${
              isDarkMode ? " text-white" : " text-black"
            }`}
          >
            Requirements
          </h3>
          <p className="pb-4 leading-7 tracking-wide text-gray-700">
            {job?.requirements.content}
          </p>
          <ul className="font-bold" style={{color:'#6E8089'}}>
            {job?.requirements.items.map((item, index) => (
              <li
                className="pl-4 ml-4 leading-7 list-disc text-indigo-500"
                key={`${item}-${index}`}
              >
                <span
                  key={`${item}-${index}`}
                  className="font-normal "
                  style={{color:'#6E8089'}}
                >
                  
                  {" "}
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <h4
            className={`py-6 text-lg font-semibold tracking-wider${
              isDarkMode ? " text-white" : " text-black"
            }`}
          >
            What You Will Do
          </h4>
          <p className="pb-4 leading-7 tracking-wide" style={{color:'#6E8089'}}>
            {job?.role.content}
          </p>
          <ol className="font-bold text-indigo-500">
            {job?.role.items.map((item, index) => (
              <li
                className="pl-4 ml-4 leading-7 list-decimal "
                key={`${item}-${index}`}
              >
                <span
                  key={`${item}-${index}`}
                  className="font-normal"
                  style={{color:'#6E8089'}}
                >
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
        {/* apply now footer  */}
        
      </section>
    </div>
  );
};
