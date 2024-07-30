
import React from "react";
import {
  FaTachometerAlt,
  FaExclamationTriangle,
  FaCogs,
  FaClipboardList,
  FaUsers,
  FaFileAlt,
  FaChevronDown,
  FaPhone, // Import icon for Contact Us
  FaSignOutAlt, // Import icon for Logout
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white font-sans font-extrabold flex flex-col">
      <div className="flex-1">
        <div className="p-4">
          <div className="p-4 flex items-center justify-center">
            <h1 className="text-3xl font-bold">Vajar Logo</h1>
          </div>
          <ul className="space-y-8 mt-14 pl-8">
            <li>
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-700">
                <FaTachometerAlt className="mr-2" />
                Dashboard
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-700">
                <FaTachometerAlt className="mr-2" />
                Assets
                <FaChevronDown className="ml-10 text-gray-400" />
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-700">
                <FaExclamationTriangle className="mr-2" />
                Incidents
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-700">
                <FaCogs className="mr-2" />
                Services
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-700">
                <FaClipboardList className="mr-2" />
                Requests
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-700">
                <FaUsers className="mr-2" />
                Users
                <FaChevronDown className="ml-12 text-gray-400" />
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-700">
                <FaFileAlt className="mr-2" />
                Reports
                <FaChevronDown className="ml-8 text-gray-400" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4 ml-5 w-52 flex justify-center items-center flex-col mb-5">
        <button className="flex items-center justify-center p-2 w-full rounded-full border border-white-800 hover:bg-gray-700 mb-4">
          <FaPhone className="mr-2" />
          Contact Us
        </button>
        <button className="flex items-center justify-center p-2 w-full rounded-full border border-white-800 hover:bg-gray-700 mt-2">
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
