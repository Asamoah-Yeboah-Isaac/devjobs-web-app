import { useEffect, useState } from "react";
import { JobList } from "../components/JobList";
import FilterSearch from "../components/FilterSearch";
import { Navbar } from "../components/Navbar";

export const Home = ({ toggleDarkMode, darkMode }) => {
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
  console.log(darkMode);
  return (
    <main className={`${darkMode ? "  bg-[#121721]" : "bg-[#f4f6f8] "}`}>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <FilterSearch darkMode={darkMode} />
      <JobList jobData={jobData} darkMode={darkMode} />
    </main>
  );
};
