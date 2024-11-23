import React from "react";

const Cards = ({ memberName, icon, status }) => {
  return (
    <div className="py-6 px-4 bg-[#E9EDC9]">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-300 rounded-lg p-5 shadow-lg bg-white">
          <div className="flex items-center w-full md:w-auto">
            <div className="w-16 h-16 rounded-full border-2 border-[#DBB000] bg-[#E9EDC9] flex items-center justify-center">
              <span className="text-sm font-bold text-[#000000]">{icon}</span>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-[#000000]">
                {memberName}
              </h3>
            </div>
          </div>
          <div className="text-center md:text-right w-full md:w-auto">
            <span className="text-sm font-medium text-[#000000] bg-[#DBB000] px-4 py-2 rounded-full">
              {status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
