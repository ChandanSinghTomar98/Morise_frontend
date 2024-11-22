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
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdSpaceDashboard size={25} />
                <span class="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaHome size={25} />
                <span class="flex-1 ms-3 whitespace-nowrap">
                  <Link to="/">Home</Link>
                </span>
               
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <GrAchievement size={25} />
                <span class="flex-1 ms-3 whitespace-nowrap">
                  <Link to="/achievement">Achivements</Link>
                </span>
             
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaInfoCircle size={25} />
                <span class="flex-1 ms-3 whitespace-nowrap">
                  <Link to="/about">About Us</Link>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoMdMore size={25} />
                <span class="flex-1 ms-3 whitespace-nowrap">More</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
