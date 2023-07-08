import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { logos } from "../../logos";
import { Navbar } from "../components/Navbar";

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
  console.log(job);
  console.log(logo.logo);

  return (
    <div>
      <Navbar />
      <section
        className={`relative z-50 flex flex-col items-center  justify-center gap-5  md:gap-20`}
      >
        <div
          className={`flex flex-col items-center justify-between h-40 -mt-6  rounded-lg md:h-auto md:flex-row md:pt-4 ${
            isDarkMode ? " border-b-red-400" : " bg-white"
          }`}
        >
          <div className="flex flex-col items-center h-10 gap-3 -mt-4 md:flex-row md:h-24 md:gap-6">
            <div
              className="flex items-center self-start justify-center h-full p-6 mx-4 rounded-lg md:rounded-none md:px-8 md:mx-0 "
              style={{ backgroundColor: job?.backgroundColor }}
            >
              <img
                className="object-contain h-auto min-w-full "
                src={logo.logo}
                alt={` The logo of ${job?.company}`}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-1 ">
              <p
                className={`text-sm font-bold tracking-wider md:text-lg${
                  isDarkMode ? " text-white" : " text-black"
                }`}
              >
                {job?.company}
              </p>
              <p className="font-medium text-red-300">
                {`${job?.company}.com`.toLowerCase()}
              </p>
            </div>
          </div>
          <p
            className={`p-2 mb-4 mr-2 text-sm font-semibold tracking-wider bg- text-myVioletColor   md:mr-6 rounded-md${
              isDarkMode
                ? " bg-gray-800 hover:bg-gray-700 hover:text-white"
                : " bg-red-500  hover:bg-gray-200 "
            }`}
          >
            <Link to={job?.website}> Company Site</Link>
          </p>
        </div>
        <div
          className={`p-8  ${
            isDarkMode ? " bg-myVeryDarkBlueColor" : " bg-white"
          }`}
        >
          <div className="flex flex-col justify-between gap-10 md:gap-0 md:items-center md:flex-row">
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 font-normal leading-4 text-myDarkGrayColor">
                <p>{job?.postedAt}</p> <p>.</p>
                <p>{job?.contract}</p>
              </div>
              <p
                className={`text-lg font-bold leading-6 md:text-2xl   ${
                  isDarkMode ? " text-white " : " text-myVeryDarkBlueColor "
                }`}
              >
                {job?.position}
              </p>
              <p className="text-sm font-semibold leading-5 text-myVioletColor">
                {job?.location}
              </p>
            </div>
            <Link to={job?.apply}>
              <button className="w-full px-6 py-2 text-sm font-normal leading-6 tracking-wider text-white rounded-md bg-myVioletColor hover:bg-myLightVioletColor">
                Apply Now
              </button>
            </Link>
          </div>
          <p className="py-8 leading-7 tracking-wide text-myDarkGrayColor">
            {job?.description}
          </p>
          <h3
            className={`pb-4 text-lg font-semibold tracking-wider ${
              isDarkMode ? " text-white" : " text-black"
            }`}
          >
            Requirements
          </h3>
          <p className="pb-4 leading-7 tracking-wide text-myDarkGrayColor">
            {job?.requirements.content}
          </p>
          <ul className="font-bold text-myVioletColor">
            {job?.requirements.items.map((item, index) => (
              <li
                className="pl-4 ml-4 leading-7 list-disc "
                key={`${item}-${index}`}
              >
                <span
                  key={`${item}-${index}`}
                  className="font-normal text-myDarkGrayColor"
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
          <p className="pb-4 leading-7 tracking-wide text-myDarkGrayColor">
            {job?.role.content}
          </p>
          <ol className="font-bold text-myVioletColor">
            {job?.role.items.map((item, index) => (
              <li
                className="pl-4 ml-4 leading-7 list-decimal "
                key={`${item}-${index}`}
              >
                <span
                  key={`${item}-${index}`}
                  className="font-normal text-myDarkGrayColor"
                >
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};
