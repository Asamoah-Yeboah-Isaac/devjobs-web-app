import { useEffect, useState } from "react";
import { JobList } from "../components/JobList";
import FilterSearch from "../components/FilterSearch";
import { Navbar } from "../components/Navbar";
import LoadMore from "../components/LoadMore";

export const Home = ({ toggleDarkMode, darkMode }) => {
  const [jobData, setJobData] = useState([]);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [contract, setContract] = useState(false);

  useEffect(() => {
    //  Fetch the jobs data from the backend
    const fetchedData = async () => {
      const response = await fetch("http://localhost:8000/api/devjobs");
      const data = await response.json();
      setJobData(data);
    };
    fetchedData();
  }, []);
  // console.log(company);
  const filteredData = jobData.filter((item) => {
    return company.toLocaleLowerCase() === item.company.toLocaleLowerCase();
  });
  // console.log(filteredData);
  return (
    <main className={`${darkMode ? "  bg-[#121721]" : "bg-[#f4f6f8] "}`}>
      <Navbar toggleDarkMode={toggleDarkMode} />
      <FilterSearch
        darkMode={darkMode}
        company={company}
        setCompany={setCompany}
      />
      <JobList jobData={jobData} darkMode={darkMode} />
      <LoadMore/>
    </main>
  );
};
