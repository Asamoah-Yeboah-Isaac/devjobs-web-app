import { useState, useEffect } from "react";

const ToggleSwitch = ({ toggleDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // persisting the toggle switch/darkmodeSwitch by storing and retrieving states from local storage
  useEffect(() => {
    const storeDarkMode = localStorage.getItem("darkMode");
    if (storeDarkMode) {
      setIsDarkMode(JSON.parse(storeDarkMode));
    }
  }, []);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(!isDarkMode));
  };

  return (
    <div onClick={toggleDarkMode}>
      <button
        className={`w-14 h-6 rounded-full relative transition-colors duration-300  bg-white 
    `}
        onClick={toggleMode}
        aria-label="navbar toggler"
      >
        <div
          className={`w-4 h-4 rounded-full absolute top-1 transform hover:bg-indigo-300 ${
            isDarkMode
              ? "translate-x-9  bg-indigo-500"
              : "translate-x-1  bg-indigo-500"
          } transition-transform duration-300`}
        ></div>
      </button>
    </div>
  );
};

export default ToggleSwitch;
