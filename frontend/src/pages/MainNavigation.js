import React from "react";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav>
<ul className="list">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "undefined")}
        end
        >
          Home
        </NavLink>
      
      </li>
     
      <li>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? "active" : "undefined")}
        >
          Events
        </NavLink>
      </li>
    </ul>
    </nav>
    
  );
};

export default MainNavigation;
