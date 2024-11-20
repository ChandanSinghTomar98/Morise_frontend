import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";
import { FaInfoCircle } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
function Sidebar() {
  return (
    <div>
        <aside id="default-sidebar" class="top-0 left-0 z-40 w-auto h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    < MdSpaceDashboard size={25}/>
                    <span class="ms-3">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <FaHome size={25}/>
                    <span class="flex-1 ms-3 whitespace-nowrap"><Link to="/">Home</Link></span>
                    <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <GrAchievement size={25}/>
                    <span class="flex-1 ms-3 whitespace-nowrap">Achivements</span>
                    <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <FaInfoCircle size={25}/>
                    <span class="flex-1 ms-3 whitespace-nowrap"><Link to="/about">About Us</Link></span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <IoMdMore size={25}/>
                    <span class="flex-1 ms-3 whitespace-nowrap">More</span>
                    </a>
                </li>
                
            </ul>
        </div>
        </aside>

    </div>
  )
}

export default Sidebar