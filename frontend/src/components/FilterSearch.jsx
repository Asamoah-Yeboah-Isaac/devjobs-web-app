import locationLogo from "../assets/desktop/icon-location.svg";
import Searchicon from "../assets/desktop/icon-search.svg";
import filtericon from "../assets/mobile/icon-filter.svg";

const FilterSearch = ({ darkMode, company, setCompany }) => {
  return (
    <div
      className={`flex -mt-7 h-15 lg:ml-12.5  lg:mx-44 gap-0 lg:-mt-10 cursor-pointer `}
    >
      {/* filter by titles,companies...  */}
      <div
        className={`relative mx-12 lg:mx-0 md:mx-9 ${
          darkMode ? "text-white" : "text-black"
        } `}
      >
        <input
          type="text"
          className={`lg:relative md:pl-[52px] lg:pl-[80px] pl-10 lg:-ml-10 pr-2 py-2 text-sm md:border-r-2  lg:border-r-2  focus:outline-none h-20 w-96 lg:w-[520px] lg:rounded-l-md md:rounded-l-md rounded-md md:w-56 lg:rounded-r-none md:rounded-r-none  ${
            darkMode ? "  bg-[#121721]" : "bg-white "
          } ${darkMode ? "border-gray-500" : " "}`}
          placeholder="Filter by titles,companies expertise..."
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <div
          className={`absolute  right-10 sm:p-4 top-1/2 transform -translate-y-1/2 flex items-center`}
        >
          <img
            src={filtericon}
            alt="filterIcon"
            className={`h-4 w-4 mr-2 md:hidden `}
          />
          <img //lg search image
            src={Searchicon}
            alt="searchIcon"
            className={`absolute md:right-36 lg:right-[440px] h-4 w-4 hidden md:inline-block  lg:absolute `}
          />
          <img //smaller screen image
            src={Searchicon}
            alt="searchIcon"
            className={` md:hidden `}
          />
        </div>
      </div>
      {/* filter by location */}
      <div
        className={`relative hidden md:flex md:-ml-9 lg:ml-0 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        <input
          type="text"
          className={` ${darkMode ? "border-gray-500" : " "} ${
            darkMode ? " bg-[#121721] " : " bg-white "
          } pl-14 pr-4 py-2 lg:w-[350px] text-sm border-r-2 focus:outline-none md:w-[280px] `}
          placeholder={`Filter by location... `}
        />
        <img
          src={locationLogo}
          alt="locationIcon"
          className="absolute left-7 top-1/2 transform -translate-y-1/2 h-4 w-4" //
        />
      </div>
      {/* FullTimeOnly checkbox   md:mx-0*/}
      <div
        className={`md:flex items-center mx-3 lg:mx-0 lg:align-middle hidden lg:relative md:relative rounded-r-md  md:mx-0   ${
          darkMode ? "  bg-[#121721]" : "bg-white "
        }`}
      >
        <div
          className={`here flex items-center lg:w-[24rem]  lg:-pl-5 md:w-[300px] md:relative lg:relative lg:mx-0 h-20 md:mx-0 rounded-r-md `}
        >
          <input type="checkbox" className="w-6 h-6 ml-5 cursor-pointer" />

          <div
            className={`mr-3 flex justify-between ml-14 font-bold md:items-center md:ml-2  ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <span
              className={`hidden lg:inline md:inline md:pl-6 lg:px-5  text-blak-500`}
            >
              Full Time{" "}
              <span className={`md:hidden lg:inline-block text-blak-500`}>
                Only
              </span>
            </span>
          </div>
          <button
            type="button"
            className="bg-indigo-500 hover:bg-indigo-300 text-white sm:px-5 py-2 rounded-md md:ml-12 "
          >
            <span className="lg:pl-1">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;

// flex items-center lg:w-80 lg:px-13 lg:-pl-5
