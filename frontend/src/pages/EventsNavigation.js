import React from "react";
import { NavLink } from "react-router-dom";

const EventsNavigation = () => {
  return (
    <nav>
      <ul className="events-list">
        <NavLink
          to=""
          className={({ isActive }) => (isActive ? "active" : "undefined")}
        >
          All Event
        </NavLink>
        <NavLink
          to="new-event"
          className={({ isActive }) => (isActive ? "active" : "undefined")}
        >
          New Event
        </NavLink>
      </ul>
    </nav>
  );
};

export default EventsNavigation;
