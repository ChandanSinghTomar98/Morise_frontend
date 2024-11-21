import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { FaInfoCircle } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
function Sidebar() {
  return (
    <div>
      <aside
        id="default-sidebar"
        class="top-0 left-0 z-40 w-auto h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-black">
          <ul className="space-y-2 font-medium">
            <li className="flex items-center">
              <FaHome size={25} className="text-gray-500 dark:text-white" />
              <Link
                to="/"
                className="flex-1 ml-3 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <GrAchievement
                size={25}
                className="text-gray-500 dark:text-white"
              />
              <Link
                to="/achievement"
                className="flex-1 ml-3 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                Achievements
              </Link>
            </li>
            <li className="flex items-center">
              <FaInfoCircle
                size={25}
                className="text-gray-500 dark:text-white"
              />
              <Link
                to="/about"
                className="flex-1 ml-3 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
