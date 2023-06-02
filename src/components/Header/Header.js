import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navbarData } from "../../common/constants";
import "./Header.css";
function Header() {
  const [sideMenu, setSideMenu] = useState("navLinks");
  const [hamButton, setHamButton] = useState("hamburger");
  const toggleMenu = () => {
    sideMenu === "navLinks"
      ? setSideMenu("navLinks menu ")
      : setSideMenu("navLinks");
    hamButton === "hamburger"
      ? setHamButton("hamburger hamActive")
      : setHamButton("hamburger");
  };
  return (
    <div className="flex justify-evenly items-center py-4 headerContainer">
      <div className="headerTitle flex ">
        {/* logo and title */}
        <h1 className="text-2xl title_heading">Movies Space</h1>
      </div>
      <ul className={sideMenu}>
        {/* navigation tools */}
        {navbarData.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setSideMenu("navLinks");
                setHamButton("hamburger");
              }}
            >
              <NavLink to={item.url}>{item.linkName}</NavLink>
            </li>
          );
        })}
      </ul>

      <div className={hamButton} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}

export default Header;
