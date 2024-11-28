import React from 'react';
import Images from '../constants/Images';
import { useNavigate } from 'react-router-dom';

const Referals = () => {
  const navigate= useNavigate();

  const handleGoBack = () => {
    navigate("/account");
  };

  const referalData = [
    {
      image : Images.Avatar,
      title: 'username',
      status: 'claim/claimed/received',   
    },
    {
      image : Images.Avatar,
      title: 'Reward Title',
      status: 'claim/claimed/received',
    },
    {
      image : Images.Avatar,
      title: 'Reward Title',
      status: 'claim/claimed/received',
    },
    {
      image : Images.Avatar,
      title: 'Reward Title',
      status: 'claim/claimed/received',
    },
    {
      image : Images.Avatar,
      title: 'Reward Title',
      status: 'claim/claimed/received',
    },
    {
      image : Images.Avatar,
      title: 'Reward Title',
      status: 'claim/claimed/received',
    },
    {
      image : Images.Avatar,
      title: 'Reward Title',
      status: 'claim/claimed/received',
    },
  ];

  return (
    <div className="text-primary font-bold py-10">
      <h1 className="text-4xl text-black mb-8 text-center">Referal</h1>
      <div className="max-w-4xl p-4 mx-auto">
        {referalData.map((referal, index) => (
          <div
            key={index}
            className="bg-secondary p-3 rounded-lg mb-4 flex justify-between items-center"
          > 
          <div className='flex items-center'>
            <img 
            src={referal.image}
            alt={referal.title} 
            className="w-12 h-12 mr-4 object-contain"
            />
            <span className="font-bold">{referal.title}</span>
            </div>
            <span className="">
              {referal.status}
            </span>
          </div>
        ))}
      </div>

      {/* Back Button - Only visible on desktop for right column */}
      <div className="m-auto w-fit justify-center mt-4">
              <button
                onClick={handleGoBack}
                className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white"
              >
                <svg
                  className="w-6 h-6 transform rotate-90"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
    </div>
  );
};

export default Referals;
