import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Info, UserRoundPen, CircleUser, House } from "lucide-react";

function Sidebar({ onSupportClick }) {
  const location = useLocation();

  const navItems = [
    {
      path: "/profile",
      icon: UserRoundPen,
      // color: "text-red-500",
      color: "text-primary",
      onClick: null,
    },
    {
      path: null,
      icon: Phone,
      // color: "text-yellow-500",
      color: "text-primary",
      onClick: onSupportClick,
    },
    {
      path: "/",
      icon: House,
      // color: "text-green-600",
      color: "text-primary",
      onClick: null,
    },
    {
      path: "/about",
      icon: Info,
      color: "text-primary",
      onClick: null,
    },
    
    {
      path: "/account",
      icon: CircleUser,
      color: "text-primary",
      onClick: null,
    },
   
  ];

  const renderNavItem = ({ path, icon: Icon, color, onClick, size }) => {
    const isActive = path && location.pathname === path;
    const baseSize = size || 32;
    const activeSize = size ? size + 10 : 32;

    const CommonContent = (
      // <>
      //   <Icon
      //     size={isActive ? activeSize : baseSize}
      //     // className={`text-primary transition-all duration-200 ${
      //     //   isActive ? "text-blue-600" : ""
      //     // }`}
      //     className={`text-primary transition-all duration-200 ${
      //       isActive ? "text-blue-600" : ""
      //     } ${isActive ? "sm:text-[28px] md:text-[28px] lg:text-[48px]" : "sm:text-[28px] md:text-[28px] lg:text-[42px]"}`}
      //   />
      // </>
      <>

        <Icon
          size={isActive ? activeSize : baseSize} 
          className={`transition-all duration-200 ${
            isActive ? "text-white bg-primary rounded-full p-1" : color
          } ${
            isActive
              ? "sm:w-8 sm:h-8  md:w-10 md:h-10 lg:w-12 lg:h-12" 
              : "sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10" 
          }`}
        />
      </>
    );

    const className =
      "flex items-center justify-center font-medium p-2 text-gray-800 rounded-lg hover:bg-gray-100 transition-colors";

    return (
      <li key={path || "support"} className="flex items-center">
        {onClick ? (
          <button onClick={onClick} className={className}>
            {CommonContent}
          </button>
        ) : (
          <Link to={path} className={className}>
            {CommonContent}
          </Link>
        )}
      </li>
    );
  };

  return (
    <div className=" md:fixed md:left-0 md:top-0 fixed bottom-0 left-0 z-30 right-0 md:h-screen w-full md:w-32 bg-white md:bg-transparent">
      <aside id="default-sidebar" className="h-full" aria-label="Sidebar">
        <div className="h-full md:px-3 md:py-4">
          <ul className="flex md:flex-col md:space-y-2 font-medium md:items-start items-center justify-around md:justify-end h-full md:h-screen md:pb-20">
            {navItems.map(renderNavItem)}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
