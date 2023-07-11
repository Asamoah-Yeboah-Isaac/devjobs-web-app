import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { JobDesc } from "./pages/JobDesc";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Navbar } from "./components/Navbar";
import { useState, useEffect } from "react";

function App() {
  //Darkmode set up
  // getting mode of machine
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("mode") === "dark"
  );

  useEffect(() => {
    // Update value of mode = changes
    localStorage.setItem("mode", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const rootElement = document.documentElement;
    if (darkMode) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route
          element={<Home toggleDarkMode={toggleDarkMode} darkMode={darkMode} />}
          path="/"
        />
        <Route
          element={
            <JobDesc darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          }
          path="/job/:id"
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
