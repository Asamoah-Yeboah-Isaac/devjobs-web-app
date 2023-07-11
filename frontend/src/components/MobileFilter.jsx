import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function FilterModal({
  locationIcon,
  handleFilterInput,
  filtering,
  darkMode,
}) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className="fixed inset-0 z-50 items-center justify-center bg-opacity-25 shadow-2xl outline-none md:hidden  backdrop-blur-sm backdrop-opacity-100 py-[50%] px-[2%]"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        <div
          className={`flex flex-col rounded-md py-2 ${
            darkMode ? " bg-[#19202d]" : "bg-white"
          }`}
        >
          <div className="relative flex items-center w-full pl-6 mt-6 mb-3 ">
            <div className="absolute left-6">
              <img src={locationIcon} alt="location icon" />
            </div>

            <input
              type="text"
              placeholder="Filter by location..."
              className={` form-checkbox w-full py-2 text-sm border-none pl-9 md:text-lg rounded-xl focus:outline-none text-myVeryDarkBlueColor  ${
                darkMode
                  ? " bg-[#19202d] text-white"
                  : " bg-white text-black"
              }`}
              onChange={handleFilterInput}
              name="location"
              value={filtering.location}
            />
          </div>
          <hr className="py-2 " />
          <div className="inline-flex items-center mb-4 px-7">
            <input
              type="checkbox"
              id="full-time-checkbox"
              className="w-4 h-8 border-none cursor-pointer form-checkbox"
              checked={filtering.isFullTime}
              onChange={handleFilterInput}
              name="isFullTime"
            />
            <label
              htmlFor="full-time-checkbox"
              className={`ml-4 text-sm font-bold  ${
                darkMode ? "text-white" : " text-[#19202d]"
              }`}
            >
              Full Time Only
            </label>
          </div>
          <button
            onClick={handleClose}
            className={`px-4 py-2 mb-8 text-sm font-semibold leading-6 tracking-wider text-white  mx-7 bg-indigo-500  rounded-md ${darkMode? "text-white bg-indigo-400" :" "}`}
          >
            Search
          </button>
        </div>
      </Modal>
    </>
  );
}

export default FilterModal;