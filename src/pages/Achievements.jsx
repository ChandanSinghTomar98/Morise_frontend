import React from "react";
import Carousel from "../components/Carousel";
import Images from "../constants/Images";

const Achievements = () => {
  const items = [
    {
      id: 1,
      type: "left",
      title: "Groundbreaking Innovation",
      content:
        "Our commitment to innovation has driven us to develop cutting-edge solutions that transform industries and create meaningful impact.",
      image: Images.card1,
      highlight: "Industry Leaders",
    },
    {
      id: 2,
      type: "right",
      title: "Global Recognition",
      content:
        "Recognized internationally for our excellence, we've consistently pushed the boundaries of what's possible in our field.",
      image: Images.card2,
      highlight: "Award Winning",
    },
    {
      id: 3,
      type: "left",
      title: "Sustainable Impact",
      content:
        "Our approach combines innovative technology with a deep commitment to sustainable practices and social responsibility.",
      image: Images.BGimage,
      highlight: "Pioneering Vision",
    },
  ];

  return (
    <>
    <Carousel/>
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h2
            className="text-center text-5xl font-bold text-gray-900 mb-16 tracking-tight"
          >
            Our Journey of <span className="text-[#DBB000]">Excellence</span>
          </h2>

          <div className="space-y-16">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col ${
                  item.type === "left" ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 bg-white rounded-2xl shadow-2xl overflow-hidden`}
              >
                
                <div className="w-full rounded-lg md:w-1/2 relative group">
                  <img
                    src={item.image}
                    alt={`Achievement ${index + 1}`}
                    className="w-full rounded-lg h-80 object-cover "
                  />
                  {/* <div className="absolute inset-0 w-fit bg-black bg-opacity-20 transition ease-in-out delay-150"></div> */}
                </div>

                <div className="w-full md:w-1/2 p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-3xl font-bold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                  <div className="bg-[#DBB000] bg-opacity-10 p-10 rounded-xl border-l-4 border-[#DBB000]">
                    <p className="text-gray-600 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-[#DBB000] text-white rounded-full text-sm font-semibold">
                      {item.highlight}
                    </span>
                  </div>
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
