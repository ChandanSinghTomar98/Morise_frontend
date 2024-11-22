import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Headset, Info, UserPen, CircleUser, House } from "lucide-react";

function Sidebar({ onSupportClick }) {
  const location = useLocation();

  const navItems = [
    {
      path: "/profile",
      icon: UserPen,
      onClick: null,
    },
    {
      path: null,
      icon: Headset,
      onClick: onSupportClick,
    },
    {
      path: "/about",
      icon: Info,
      onClick: null,
    },
    {
      path: "/account",
      icon: CircleUser,
      onClick: null,
    },
    {
      path: "/home",
      icon: House,
      onClick: null,
    },
  ];

  const renderNavItem = ({ path, icon: Icon, onClick, size }) => {
    const isActive = path && location.pathname === path;
    const baseSize = size || 28;
    const activeSize = size ? size + 10 : 38;

    const CommonContent = (
      <>
        <Icon
          size={isActive ? activeSize : baseSize}
          className={`text-primary transition-all duration-200 ${
            isActive ? "text-blue-600" : ""
          }`}
        />
      </>
    );

    const className =
      "flex items-center justify-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors";

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
    <div className="md:fixed md:left-0 md:top-0 fixed bottom-0 left-0 z-30 right-0 md:h-screen w-full md:w-auto bg-white md:bg-transparent">
      <aside id="default-sidebar" className="h-full" aria-label="Sidebar">
        <div className="h-full md:px-3 md:py-4">
          <ul className="flex md:flex-col md:space-y-2 font-medium md:items-start items-center justify-around md:justify-end h-full md:h-screen md:pb-8">
            {navItems.map(renderNavItem)}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
