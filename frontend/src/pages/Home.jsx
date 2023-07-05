import { useEffect, useState } from "react";
import { JobList } from "../components/JobList";
import FilterSearch from "../components/FilterSearch";
import { Navbar } from "../components/Navbar";

export const Home = () => {
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
  return (
    <main>
      <Navbar />
      <FilterSearch />
      <JobList jobData={jobData} />
    </main>
  );
};
