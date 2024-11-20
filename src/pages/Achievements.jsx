import React from "react";
import Carousel from "../components/Carousel";
import Images from "../constants/Images";

const Achievements = () => {
  const items = [
    {
      id: 1,
      type: "left",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: Images.card1,
    },
    {
      id: 2,
      type: "right",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: Images.card2,
    },
    {
      id: 3,
      type: "left",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: Images.card3,
    },
  ];

  return (
    <>
   <div className="bg-primary">
   <Carousel/>
      <div className="container mx-auto my-4">
        <h2 className="text-center text-2xl font-bold text-[#000] mb-8">
          OUR ASSOCIATIONS & HISTORY
        </h2>
        <div className="max-w-screen-lg mx-auto space-y-6 rounded-lg">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ml-0 md:flex-row items-center ${
                item.type === "left" ? "md:flex-row" : "md:flex-row-reverse"
              } space-y-2 md:space-y-0 p-4`}
            >
              <div className="flex-shrink-0 w-full md:w-[500px] h-[200px] md:h-[300px] shadow-md overflow-hidden">
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-grow bg-white text-[#000] w-full md:w-[500px] h-[200px] md:h-[300px] flex items-center justify-center text-sm md:font-medium p-4 shadow-md border-2 border-[#DBB000] transition-all duration-300 hover:text-[#DBB000]">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
   </div>
    </>
  );
};

export default Achievements;
