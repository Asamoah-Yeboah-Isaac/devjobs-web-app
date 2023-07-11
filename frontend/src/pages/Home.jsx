import { useEffect, useState } from "react";
import { JobList } from "../components/JobList";
import FilterSearch from "../components/FilterSearch";
import { Navbar } from "../components/Navbar";
import LoadMore from "../components/LoadMore";

export const Home = ({ toggleDarkMode, darkMode }) => {
  const [jobData, setJobData] = useState([]);
  const [filtering, setFiltering] = useState({
    company: "",
    location: "",
    isFullTime: false,
  });

  // setting number of jobs to display
  const [displayJob, setDisplayJob] = useState(12);
  const [start, setStart] = useState(0);

  useEffect(() => {
    //  Fetch the jobs data from the backend
    const fetchedData = async () => {
      const response = await fetch("http://localhost:8000/api/devjobs");
      const data = await response.json();
      setJobData(data);
    };
    fetchedData();
  }, []);

  // Filtering funcion
  const filteredJobs = jobData.filter((item) => {
    // taking value from user input
    const { company, location } = filtering;
    // Initialize isFullTime from the state
    let { isFullTime } = filtering;
    const companyRegex = new RegExp(company, "gi");
    const locationRegex = new RegExp(location, "gi");

    // Check if contract is 'Full Time' and update isFullTime state
    if (item.contract === "Full Time") {
      isFullTime = true;
    }

    // Perform filtering based on title, location, and isFullTime
    return (
      (companyRegex.test(item.company) || companyRegex.test(item.position)) &&
      locationRegex.test(item.location) &&
      (isFullTime ? item.contract === "Full Time" : true)
    );
  });
  // end of  filtering function

  const loadMoreJobs = () => {
    // Increase the number of visible jobs and starting index
    setDisplayJob(jobData.length);
    start(0);
  };
 

  return (
    <main className={`${darkMode ? "  bg-[#121721]" : "bg-[#f4f6f8] "}`}>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <FilterSearch
        filtering={filtering}
        setFiltering={setFiltering}
        darkMode={darkMode}
      />
      <JobList jobData={filteredJobs} darkMode={darkMode} />
      {displayJob !== jobData.length && filteredJobs.length >= displayJob && (
        <LoadMore handleClick={loadMoreJobs} />
      )}
      {filteredJobs.length === 0 && (
        <div>
          <h2 className={`font-extrabold text-4xl flex justify-center ${darkMode? "text-white" : " "}`}>Not Found</h2>
        </div>
      )}
    </main>
  );
};
