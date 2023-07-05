import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { JobDesc } from "./pages/JobDesc";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<JobDesc />} path="/job" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
