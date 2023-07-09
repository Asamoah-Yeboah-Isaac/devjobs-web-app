import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { JobDesc } from "./pages/JobDesc";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Navbar } from "./components/Navbar";
import { useState , useEffect} from "react";



function App() {
  //Darkmode set up
  // getting mode of machine 
  const [darkMode, setDarkMode] = useState(localStorage.getItem('mode') === 'dark');
  // sync mode with screen 
  useEffect(() => {
    const saveModeToLocalStorage = () => {
      localStorage.setItem("mode", darkMode ? "dark" : "light");
    };
  
    saveModeToLocalStorage();
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((modeNow) => !modeNow);
  };

  // prevent change of state after reloading or refreshing 
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
        <Route element={<Home toggleDarkMode = {toggleDarkMode} darkMode={darkMode} />} path="/" />
        <Route element={<JobDesc darkMode={darkMode} />} path="/job/:id" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
