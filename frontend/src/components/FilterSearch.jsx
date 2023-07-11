import locationLogo from "../assets/desktop/icon-location.svg";
import Searchicon from "../assets/desktop/icon-search.svg";
import filtericon from "../assets/mobile/icon-filter.svg";

const FilterSearch = () => {
  return (
    <div className="flex -mt-7 h-15 lg:ml-12.5 lg:mx-44 gap-0 lg:-mt-10 cursor-pointer">
      {/* filter by titles,companies...  */}
      <div className="relative mx-12 lg:mx-0 md:mx-9 ">
        <input
          type="text"
          className="lg:relative bg-white md:pl-[52px] lg:pl-[80px] pl-10 lg:-ml-10 pr-2 py-2 text-sm md:border-r-2  lg:border-r-2  focus:outline-none h-20 w-96 lg:w-[540px] lg:rounded-l-md md:rounded-l-md rounded-md md:w-72 lg:rounded-r-none md:rounded-r-none "
          placeholder="Filter by titles,companies expertise..."
          
        />
        <div className=" bg-white absolute  right-10 sm:p-4 top-1/2 transform -translate-y-1/2 flex items-center ">
          <img
            src={filtericon}
            alt="filterIcon"
            className="   h-4 w-4 mr-2 bg-white md:hidden  "
          />
          <img //lg search image
            src={Searchicon}
            alt="searchIcon"
            className=" absolute md:right-52 lg:right-[440px] h-4 w-4 hidden md:inline-block bg-white lg:absolute"
          />
          <img //smaller screen image
            src={Searchicon}
            alt="searchIcon"
            className=" md:hidden"
          />
        </div>
      </div>
      {/* filter by location */}
      <div className="relative sm:hidden md:flex md:-ml-9 lg:ml-0 ">
        <input
          type="text"
          className="pl-14 pr-4 py-2 lg:w-[360px] text-sm border-r-2 focus:outline-none md:w-[230px] "
          placeholder="Filter by location..."
        />
        <img
          src={locationLogo}
          alt="locationIcon"
          className="absolute left-7 top-1/2 transform -translate-y-1/2 h-4 w-4" //
        />
      </div>

      {/* FullTimeOnly checkbox   md:mx-0*/}
      <div className="md:flex items-center  mx-3 lg:mx-0 lg:align-middle hidden lg:bg-white lg:relative md:relative rounded-r-md  md:bg-white md:mx-0">
        <div className="flex items-center lg:w-[19rem]  lg:-pl-5 md:w-[220px] md:ml-4">
          <input type="checkbox" className="w-5 h-4 " />
          <div className="mr-3 flex justify-between ml-14 text-black-500 font-bold md:items-center md:ml-0 ">
            <span className="hidden lg:inline md:inline md:pl-2 lg:px-5  ">
              Full Time <span className="md:hidden lg:inline-block">Only</span>
            </span>
          </div>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-300 text-white sm:px-5 py-2 rounded-md lg:ml-15 lg:pr-7 "
          >
            <span className="lg:pl-2">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;

// flex items-center lg:w-80 lg:px-13 lg:-pl-5
