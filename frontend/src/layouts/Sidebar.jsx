import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaBook, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white w-64 flex flex-col">
      {/* Sidebar Header */}
      <div className="p-6 text-center text-2xl font-bold border-b border-gray-700">
        Dashboard
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard/home"
              className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              <FaHome /> <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile"
              className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              <FaUser /> <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/courses"
              className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              <FaBook /> <span>Courses</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/settings"
              className="flex items-center space-x-3 px-4 py-2 rounded hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              <FaCog /> <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-gray-700 text-sm text-center">
        © 2024 HomeTeacher
      </div>
    </div>
  );
};

export default Sidebar;
