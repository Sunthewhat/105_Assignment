import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/contact"} element={<Contact />}></Route>
      </Routes>
      <section className="MainBlock">
        <nav>
          <NavLink id="n1" to={"/"}>
            Home
          </NavLink>
          <NavLink id="n1" to={"/about"}>
            About
          </NavLink>
          <NavLink id="n1" to={"/contact"}>
            Contact
          </NavLink>
        </nav>
      </section>
    </BrowserRouter>
  );
}

export default App;
