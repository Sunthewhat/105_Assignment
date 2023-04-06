import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React from "react";
import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AdminPage from "./components/AdminPage";
import Error from "./components/Error";
import Profile from "./components/Profile";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="first">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Error setUserLoggedIn={setUserLoggedIn} />}
          />
          <Route
            path="/Admin"
            element={
              userLoggedIn ? (
                <AdminPage />
              ) : (
                <Error setUserLoggedIn={setUserLoggedIn} />
              )
            }
          />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile/:id" element={<Profile />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <nav>
          <NavLink className="navL" to={"/Home"}>
            Home
          </NavLink>
          <NavLink className="navL" to={"/About"}>
            About
          </NavLink>
          <NavLink className="navL" to={"/Contact"}>
            Contact
          </NavLink>
          <NavLink className="navL" to={"/Profile/208"}>
            Profile
          </NavLink>
          <NavLink className="navL" to={"/Admin"}>
            For Admin!!
          </NavLink>
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
