import { Link } from "react-router-dom";
import { logos } from "../../logos";
//mapping through data.json to display neccessary details on job card(id,contract,postedAt,position,company,location)
logos;

// className={` ${
//   darkMode ? "colorMidnight" : " main "
// } `}

export const JobList = ({ jobData, darkMode }) => {
  return (
    <div>
      <section className="grid pt-24 lg:grid-cols-3 md:grid-cols-2 gap-12 lg:gap-x-0 lg:pl-24 rounded-md items-center justify-center md:mx-10 md:pr-10 mb-5 cursor-pointer">
        {jobData.map((job) => {
          // console.log(darkMode);
          return (
            <Link to={`/job/${job.id}`} key={job.id}>
              <div
                className={` ${
                  darkMode ? "colorVeryDarkBlue" : "bg-white"
                } w-96  pl p-12  relative`}
                key={job.id}
              >
                <span
                  className={`text-[16px] font-normal  text-slate-500 ${
                    darkMode ? "colorVeryDarkBlue" : "bg-white"
                  }`}
                >
                  {job.contract}{" "}
                  <span
                    className={` ml-1 mr-1 ${
                      darkMode ? "colorVeryDarkBlue" : "bg-white"
                    }`}
                  >
                    .
                  </span>{" "}
                  {job.postedAt}
                </span>
                <h1
                  className={`font-bolde my-2 ${
                    darkMode ? "text-white" : "text-black"
                  } ${darkMode ? "colorVeryDarkBlue" : "bg-white"}`}
                >
                  {job.position}
                </h1>
                <h2
                  className={`text-[16px] font-normal  mb-10 text-slate-500 ${
                    darkMode ? "colorVeryDarkBlue" : "bg-white"
                  }`}
                >
                  {" "}
                  {job.company}
                </h2>
                <p
                  className={`w-[286px] md:w-[270px] text-indigo-500 text-[14px] font-bold  -mb-3 ${
                    darkMode ? "colorVeryDarkBlue" : "bg-white"
                  }`}
                >
                  {job.location}
                </p>{" "}
                <div
                  style={{ backgroundColor: job.logoBackground }}
                  className={` h-10 w-10 absolute  -top-7 rounded-md `}
                >
                  {/* mapping through logos to display job logos  */}
                  {logos.map((logo, index) => {
                    if (logo.id === job.id) {
                      return (
                        <img
                          key={logo.id - index}
                          src={logo.logo}
                          alt={job.company}
                          className=" flex justify-center items-center p-3 "
                        />
                      );
                    }
                  })}
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};
