import locationLogo from "../assets/desktop/icon-location.svg";
import Searchicon from "../assets/desktop/icon-search.svg";
import filtericon from "../assets/mobile/icon-filter.svg";

const FilterSearch = () => {
  return (
    <div className="flex -mt-7 h-15  md:mx-44 gap-0 lg:-mt-10  ">
      {/* filter by titles,companies...  */}
      <div className="relative mx-12 lg:mx-0 ">
        <input
          type="text"
          className="lg:relative bg-white pl-10 pr-2 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 h-20 w-96 lg:w-[500px] lg:-pl-8  "
          placeholder="Filter by titles, companies, expertise..."
        />
        <div className=" bg-white absolute right-10 sm:p-4 top-1/2 transform -translate-y-1/2 ">
          <img
            src={filtericon}
            alt="filterIcon"
            className="h-4 w-4 inline-block mr-2 bg-white md:hidden "
          />
          <img
            src={Searchicon}
            alt="searchIcon"
            className="h-4 w-4 inline-block bg-white lg:absolute "
          />
        </div>
      </div>
      {/* filter by location */}
      <div className="relative hidden md:flex">
        <input
          type="text"
          className="pl-10 pr-4 py-2 lg:w-[320px] text-sm border border-gray-300 focus:outline-none focus:ring-2 "
          placeholder="Filter by location..."
        />
        <img
          src={locationLogo}
          alt="locationIcon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" // ade9b23b2cabc1b3cb79c5d6d63eacfa1147338e
        />
      </div>

      {/* fulltimeonly checkbox */}
      <div className="md:flex items-center  mx-3 lg:mx-0 lg:align-middle hidden lg:bg-white lg:relative lg:px-7  ">
        <div className="flex items-center lg:w-80 lg:px-13 lg:-pl-5">
          <input type="checkbox" className="w-6 h-6  " />
          <div className="mr-3 ml-2 flex justify-between text-slate-500 font-bold lg:ml- ">
            Full Time Only
          </div>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white sm:px-5  py-2 rounded-md lg:ml-20  "
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
