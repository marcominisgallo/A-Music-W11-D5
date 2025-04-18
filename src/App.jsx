import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AMNavbar from "./components/AMNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <AMNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
